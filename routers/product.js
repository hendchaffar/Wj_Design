const express = require('express');
const isAdmin = require('../Middlewares/isAdmin');
const router = express.Router();
const Product = require('../models/Product');

//@route Post api/product/add
//@desc Registre new product
//@acces public

router.post('/add', isAdmin, async (req, res) => {
    const { name, imgUrl, price, countInStock, category } = req.body;

    try {

        const newProduct = new Product({
            name, imgUrl, price, countInStock, category
        });
        const product = await newProduct.save();

        res.json({ msg: "Product added", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})


//@route Get api/Product
//@desc Get all Product
//@acces public

router.get('/', async (req, res) => {

    try {
        const product = await Product.find().populate('category', ['name']);
        res.json({ msg: "data fetched", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

//@route Get api/Product/:catId
//@desc Get new Product
//@acces public

router.get('/:catId', async (req, res) => {
    try {
        const product = await Product.find({ category: req.params.catId });
        res.json({ msg: "data fetched", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

//@route delete api/Product/delete
//@desc delete Product
//@acces public

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete({ _id: id });
        res.json({ msg: "Product deleted", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

//@route update api/Product/update
//@desc update Product
//@acces public

router.put('/edit/:_id', isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "Product edited", product });
    } catch (error) {
        res.json({ msg: "error" });
    }

})


module.exports = router;

