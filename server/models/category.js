const mongoose = require("mongoose");



const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Категорийн нэр оруулна уу"],
        unique:true,  //давхардаж орохгүй
        trim:true,
        maxlength: [50, "Категорийн тэмдэгтийн урт нь 50 тэмдэгт байх ёстой"]  
    },
    photo: {
        type: String,
        default: "no-photo.jpg",
    }
})
module.exports = mongoose.model("Category", CategorySchema)