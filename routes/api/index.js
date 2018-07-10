const router = require("express").Router();
const reviewRoutes = require("./reviews");
const hotelRoutes = require("./hotels");
const blogRoutes = require("./blogs");

// review routes
router.use("/reviews", reviewRoutes);
router.use("/hotels", hotelRoutes);
router.use("/blogs,", blogRoutes);

module.exports = router;
