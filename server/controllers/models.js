
const Models = require("../models/models")
const asyncHandler = require("express-async-handler")



exports.createModels = async (req, res, next)=>{
    console.log("data", req.body)

    try{
        const models = await Models.create(req.body)
        res.status(200).json({
            success:true,
            data: models
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}



exports.getModels = async (req, res, next)=>{

    try{
        const models = await Models.find()
        res.status(200).json({
            success:true,
            data: models
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}


exports.getModelsById = async (req, res, next)=>{

    try{
        const models = await Models.findById(req.params.id)
        res.status(200).json({
            success:true,
            data: models
        })

    }catch(err){
        res.status(400).json({
            success:false,
            error: err
        })
    }    
}



exports.getModelsBySearch = asyncHandler(async (req, res, next)=>{
    let query;


    if(req.params.searchId){
        query = Models.find({
            "$or":[
                {name: {$regex: req.params.searchId, $options:"i"}},
                {profession: {$regex: req.params.searchId, $options:"i"}}
            ]
        })

    }else{ 

        query = Models.find()
        
    }

    


    const searchs = await query;

    res.status(200).json({
        success:true,
        data: searchs
    })

 
})