const express = require("express");
const router = express.Router()

const { createCategory, getCategory, getCategoryById } = require("../controllers/category");
const { createModels, getModels, getModelsById, getModelsBySearch } = require("../controllers/models");
const { register, login } = require("../controllers/user");




// import controllers

const { getTest } = require("../controllers/test")


//import middlewares



//api routes


router.get("/models",getModels).get("/models/:id",getModelsById ).get("/search/:searchId", getModelsBySearch).post("/createModels", createModels)
router.get("/getCat",getCategory).get("/details/:id",getCategoryById ).post("/category", createCategory)

//user route
router.post("/register",register).post("/login", login)





module.exports = router;