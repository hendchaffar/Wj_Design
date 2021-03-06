const express = require('express');
const isAdmin = require('../Middlewares/isAdmin');
const { categoryRules, validator } = require('../Middlewares/validator');
const router = express.Router();
const Category = require('../models/Category');

//@route Get api/Category
//@desc Get all category
//@acces public

router.get('/', async (req, res) => {

    try {
        const category = await Category.find();
        res.json({ msg: "data fetched", category });
    } catch (error) {
        res.json({ msg: "error" });
    }
})

//@route delete api/Category/delete/:id
//@desc Delete a category
//@acces private

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByIdAndDelete(id);
        res.json({ msg: "Category deleted", category });
    } catch (error) {
        res.json({ msg: "error" });
    }
})

//@route Post api/Category
//@desc Add new category
//@acces private

router.post('/', isAdmin, categoryRules(), validator, async (req, res) => {
    const { name, imgUrl, description } = req.body
    try {
        const newCategory = new Category({
            name,
            imgUrl,
            description
        });
        await newCategory.save();
        res.json({ msg: "Category added", newCategory });
    } catch (error) {
        res.json({ msg: "error" }, error.message);
    }
})

//@route PUT api/Category
//@desc edite category
//@acces private 

router.put('/edit/:_id', isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
        const category = await Category.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "Category edited", category });
    } catch (error) {
        res.json({ msg: "error" });
    }

})

module.exports = router;