const mongoose =require('mongoose');

const PortfolioSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },

    avatar:{
        type:String

    },
    
    Description:{
        type:String
    }
});

module.exports = Portfolio = mongoose.model('portfolio',PortfolioSchema)