const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000
const secretKey = 'abcde12345';
app.use(bodyParser.json())
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shasankshasank500@gmail.com",   
    pass: "lgxu trym qqdf ayhr"     
  }
});
mongoose.connect('mongodb+srv://shasankgavini:Shasank%40123@cluster0.jhjnxcv.mongodb.net/f(y)');
const user_data=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    courseval:String,
    provider: { type: String, default: "local" } 
})
const User=mongoose.model('user',user_data);
app.post('/signup',async (req,res)=>{
    var email=req.body.email;
    const valid= await User.findOne({email});
    if(valid){
        return res.status(402).send("email already exist");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    status: false,
    message: "Enter Valid Email",
    token: -1
  });
}
  
    
    var password=req.body.password;

var up=false,num=false,low=false,spl=false;

    for(var i=0;i<password.length;i++){
        if(/[A-Z]/.test(password[i])){
          up=true;
        }
       else if(/[0-9]/.test(password[i])){
           num=true;
        }
        else if(/[a-z]/.test(password[i])){
           low=true
        }
        else if(/[!@#$%^&*()_+~]/.test(password[i])){
           spl=true;
        }
    }
  
    if(up&&num&&low&&spl&&password.length>=8){
         var password1=req.body.confirmPassword;
         if(password===password1){
            var obj={
                email:email,
                password:password
            }
            const db=new User(obj);
            await db.save();
             const t=jwt.sign({
                  email:email
                },secretKey,{expiresIn: '2h'});
                
           return res.status(200).json({
            status:true,
            message:"logined",
            token:t
          }
        );
         }
         else{
            return res.status(400).json({
              status:false,
              message:"revalidate password",
              token:-1
            })
         }

    }
    else{
          return res.status(308).json({
            status:false,
            message:"make the password strong",
            token:-1
    });
    }
})
const otpStore = {};
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send("User not found");

  const otp = Math.floor(100000 + Math.random() * 900000); 
  otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 };

  await transporter.sendMail({
    from: "shasankshasank500@gmail.com",
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is ${otp}. It will expire in 5 minutes.`
  });

  res.status(200).send("OTP sent to your email");
});


app.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;

  const record = otpStore[email];
  if (!record) return res.status(400).send("OTP not requested");
  if (record.expires < Date.now()) return res.status(400).send("OTP expired");
  if (record.otp != otp) return res.status(400).send("Invalid OTP");
  if (newPassword !== confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }
  let up = false, num = false, low = false, spl = false;
  for (let i = 0; i < newPassword.length; i++) {
    if (/[A-Z]/.test(newPassword[i])) up = true;
    else if (/[0-9]/.test(newPassword[i])) num = true;
    else if (/[a-z]/.test(newPassword[i])) low = true;
    else if (/[!@#$%^&*()_+~]/.test(newPassword[i])) spl = true;
  }

  if (!(up && num && low && spl && newPassword.length >= 8)) {
    return res.status(400).send("Password must be strong (uppercase, lowercase, number, special char, 8+ length)");
  }
  await User.updateOne({ email }, { $set: { password: newPassword } });
  delete otpStore[email];

  res.status(200).send("Password reset successful");
});





app.post('/login',async(req,res)=>{
  const {email,password} =req.body;
  if(!email||!password) {
    return res.send("wrong USer name or Password");
  }
  let user= await User.findOne({email});
  if(!user){
    return res.status(400).send("User Not Found");
  }
  else{
    if(user.password===password){
       const token=jwt.sign({
                  email:email
                },secretKey,{expiresIn: '2h'});
     return  res.status(200).json({
      message:"successful",
      token
    })
    }
    else{
      return res.status(401).send("wrong password");
    }
  }
})




app.post('/google-auth', async (req, res) => {
  try {
    const { email, name } = req.body;

    let user = await User.findOne({ email, provider: "google" });

    if (!user) {
      user = new User({
        email,
        username: name,
        provider: "google"
      });
      await user.save();
    }

    const token = jwt.sign({ email }, secretKey, { expiresIn: '2h' });
    return res.status(200).json({ message: "Google login success", token });

  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
