const express=require('express');
const isAdmin = require('../Middlewares/isAdmin');
const router=express.Router();
const Portfolio=require('../models/Portfolio');

//@route Post api/portfolio/add
//@desc Registre new portfolio
//@acces public

router.post('/add',isAdmin, async (req,res)=>{
    const{name, avatar, Description}=req.body;
    
    try {
        const newPortfolio=new Portfolio({
            name, avatar, Description
        });
        const portfolio = await newPortfolio.save();

        res.json({msg:"portfolio added",portfolio});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})


//@route Get api/portfolio
//@desc Get new portfolio 
//@acces public

router.get('/', async (req,res)=>{

    try {
        const portfolio = await Portfolio.find();
        res.json({msg:"data fetched",portfolio});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})

//@route delete api/portfolio/delete
//@desc delete portfolio
//@acces public

router.delete('/delete/:id',isAdmin, async (req,res)=>{
    const {id} =req.params;  
    try {
        const portfolio = await Portfolio.findByIdAndDelete({_id:id});
        res.json({msg:"portfolio deleted",portfolio});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})

//@route update api/portfolio/update
//@desc update portfolio
//@acces public

router.put('/edit/:_id',isAdmin, async (req,res)=>{
    const {_id} =req.params;  
    try {
        const portfolio = await Portfolio.findByIdAndUpdate(_id,{$set: req.body},{ new: true, $upsert: true });
        res.json({msg:"portfolio edited",portfolio});
    } catch (error) {
        res.json({msg:"error"});
    }
    
})


module.exports=router;

