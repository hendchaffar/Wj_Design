//Require router from express
const express=require("express");
const router=express.Router("");
 //Require the json web token
const jwt=require('jsonwebtoken')
//Require bcrypt
const bcrypt=require("bcrypt");
const gravatar =require('gravatar')

//Require the User Schema
const User =require('../models/User');
const isAdmin=require('../Middlewares/isAdmin');
const isAuth=require('../Middlewares/isAuth');

const {registerRules,loginRules,validator}=require('../Middlewares/validator')

//---------------------------------Register--------------------------------------------

//@route Post api/auth/register
//@desc Registre new User 
//@acces public

router.post('/register', registerRules(),validator, async (req,res)=>{
    
    const {name,lastName,email,password,imgUser }=req.body;
    try {
        
        //check for existing User
        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({msg:'User already exists'})
        }
        const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
        //create new User
        user=new User({name,lastName,email,password,avatar,imgUser});
        //create salt & hash
        const salt=10;
        const hashedpassword=await bcrypt.hash(password,salt);
        user.password=hashedpassword;

        //Save the Use 
        await user.save();

        //sing User
        const payload ={
            id: user.id,
        };

        const token=await jwt.sign(payload,process.env.secretOrkey)

        res.status(200).json({msg:'User registre with success ',user , token})

        }catch(error) {
            console.error(error);
        res.status(500).json({msg:'Server error' });
        }
});
// ---------------------------------------------------LOGIN------------------------------------------------------------
//@route Post api/auth/login
//@desc login new User 
//@acces public
router.post('/login', loginRules(),validator,async (req,res)=>{
    const {email,password}=req.body;
    try {
        //Simple Validation 
        if(!email || !password)  {
            return res.status(400).json({msg:'Pleaze enter all the fields' });
        }
        //check for existing User 
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Bad Credentials ! email'});
        }
        //check Password
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Bad Credentials ! password'});
        }
        //sing User
        const payload ={
            id: user.id,
        };

        const token=await jwt.sign(payload,process.env.secretOrkey)

        res.json({msg:'Logged in with success',user ,token});
    } catch (error) {
        res.status(500).json({msg:'Server error' });
    }
});
//----------------------------------------------------------User-----------------------------------------------------------
//@route Ger api/auth/user
//@desc Get AUthentification User 
//@acces public

router.get('/user',isAuth,(req,res)=>{
    res.status(200).json({user:req.user})
})

//--------------------------------------
//@route Ger api/auth/alluser
//@desc Get  User 
//@acces public

router.get('/alluser',isAdmin, async (req,res)=>{

    try {
        const users = await User.find({role:"user"}).select('-password');
        res.json({msg:"User",users});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})

//@route delete api/auth/alluser/delete
//@desc delete User
//@acces public

router.delete('/delete/:id',isAdmin, async (req,res)=>{
    const {id} =req.params;  
    try {
        const user = await User.findByIdAndDelete(id);
        res.json({msg:"User deleted",user});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})






module.exports=router;