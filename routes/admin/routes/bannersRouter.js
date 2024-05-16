const express = require('express');
const {
    uploadBannerImageTm,
    uploadBannerImageRu,
    addBanner,
    deleteBanner,
    editBanner,
} = require('../../../controllers/admin/bannerControllers');
const {
    getAllBanners,
    getBanner,
} = require('../../../controllers/public/bannerControllers');
const { protect } = require("../../../controllers/admin/adminControllers")
const router = express.Router();

router.get('/',  getAllBanners);
router.get('/:id',  getBanner);
router.post('/',  addBanner);
router.patch("/:id",  editBanner)
router.delete('/:id',  deleteBanner);
module.exports = router;