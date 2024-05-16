const express = require('express');
const {
    addCategory,
    editCategory,
    deleteCategory,
    getOneCategory,
    searchCategory,
    getAllCategories
} = require('../../../controllers/admin/categoriesControllers');;
const { protect } = require("../../../controllers/admin/adminControllers")
const router = express.Router();
router.get('/',  getAllCategories);
router.get("/getOne/:category_id",  getOneCategory)
router.get("/search",  searchCategory)
router.post('/add',  addCategory);
router.patch('/edit/:id',  editCategory);
router.delete('/delete/:id',  deleteCategory);

module.exports = router;