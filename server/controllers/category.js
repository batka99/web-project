
const Category = require("../models/category")



exports.createCategory = async (req, res, next)=>{
    console.log("data", req.body)

    try{
        const category = await Category.create(req.body)
        res.status(200).json({
            success:true,
            data: category
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}



exports.getCategory = async (req, res, next)=>{

    try{
        const categories = await Category.find()
        res.status(200).json({
            success:true,
            data: categories
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}


exports.getCategoryById = async (req, res, next)=>{

    try{
        const categories = await Category.findById(req.params.id)
        res.status(200).json({
            success:true,
            data: categories
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}