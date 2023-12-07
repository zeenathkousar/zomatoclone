const express=require('express');
const router=express.Router();
const user=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');

const jwtSecret="Mynameiszeanthjdhhf$gfjkd123"

router.post('/createuser',
[  body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','incorrect pswd').isLength({ min: 5 }),
],

async(req,res)=>{
    // console.log(req.body.name,req.body.password,req.body.email,req.body.location)


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    const secpassword=await bcrypt.hash(req.body.password,salt);

    try{
        await user.create({
            name: req.body.name,
            password: secpassword,
            email: req.body.email,
            location: req.body.location
        })
        res.json({success:true})
    }catch(error){
        console.log(error)
        res.json({success:false})

    }
})


//login
router.post('/loginuser',
[  body('email').isEmail(),
body('password','incorrect pswd').isLength({ min: 5 }),
],
async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    let email=req.body.email
    

    try{
       let userData= await user.findOne({email});
       if(!userData){
        return res.status(400).json({error:'try login with correct credentials'})
       }
       const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
    //    if(req.body.password !== userData.password){
       if(!pwdCompare){
        return res.status(400).json({error:'wrong password'})

       }
        // return res.redirect('/') //violate cors policy
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
       return res.json({success:true,authToken:authToken})


    }catch(error){
        console.log(error)
        res.json({success:false})
        

    }
})


module.exports= router