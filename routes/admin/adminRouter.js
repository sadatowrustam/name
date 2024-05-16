const express = require('express')
const router = express.Router()
const { login, protect, updateMe, sendMe, changeTime, getTime, updateEmail, updateMessage, forgotPassword } = require("../../controllers/admin/adminControllers")
const { uploadBrandImage } = require('../../controllers/admin/brandsControllers')
router.post("/login", login)
router.post("/edit", protect, updateMe)
router.post("/upload-image",uploadBrandImage)
router.patch("/email", protect, updateEmail)
router.patch("/message", protect, updateMessage)
router.get("/get-me", protect, sendMe)
router.get("/time", protect, getTime)
router.post("/time", protect, changeTime)
router.patch("/forgot-password", forgotPassword)
router.use("/banners",  require("./routes/bannersRouter")) //test edildi
router.use('/categories', require('./routes/categoriesRouter')); //test etmeli
router.use("/velayats",require("./routes/welayatRouter"))
router.use("/etraps",require("./routes/etrapRouter"))
router.use("/subcategories", require("./routes/subcategoriesRouter")) //test etmeli
router.use("/brands", require("./routes/brandsRouter")) //test etmeli
router.use("/products",  require("./routes/productsRouter")) //test etmeli
router.use("/orders", require("./routes/ordersRouter"))
router.use("/chats",require("./routes/chatRouter"))
module.exports = router