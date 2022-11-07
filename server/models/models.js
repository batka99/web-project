const mongoose = require("mongoose");



const ModelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Ажилтний нэрийг оруулна уу"],
        trim:true,
        maxlength: [50, "Ажилтний нэрийн урт 50 тэмдэгтээс илүүгүй байх ёстой"]  
    },
    profession: {
        type: String,
        required:[true, "Мэргэжил оруулна уу"],
        trim:true,
        maxlength: [100, "Мэргэжил 100 тэмдэгтээс илүүгүй байх ёстой"]  
    },
    hourSalary: {
        type: String,
        required:[true, "Цагийн хөлс"],
        trim:true,
        maxlength: [100, "Цагийн хөлс"]  
    },
    registerNumber: {
        type: String,
        required:[true, "Регистерийн дугаар"],
        trim:true,
        unique:true,  //давхардаж орохгүй
        maxlength: [10, "Регистерийн дугаар"]  
    },
    workingTime: {
        type: String,
        required:[true, "ажлын цаг"],
        trim:true,
        maxlength: [100, "ажлын цаг"]  
    },
    description: {
        type: String,
        required:[true, "Тайлбар оруулна уу"],
        trim:true,
        maxlength: [500, "Тайлбар оруулна уу"]  
    },
    photo: {
        type: String,
        default: "no-photo.jpg",
    level: {
        type: String,
        default: "no-photo.jpg",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    }
})
module.exports = mongoose.model("Models", ModelsSchema)