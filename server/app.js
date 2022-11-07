// import module
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();





//app

const app = express();

app.use(express.json());


//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("DB CONNECTED")).catch((err)=>console.log("DB connection error",err))



//middleware

app.use(morgan("dev"));
app.use(cors({origin:true, credentials:true}));


//routes

const mainRoutes = require("./routes/route");

app.use('/', mainRoutes);







//port

const port = process.env.PORT || 8080
const server = app.listen(port, () => console.log(`server is running on porrt ${port}`) )

process.on("unhandledRejection", (err, promise) => {
    console.log(`Алдаа гарлаа : ${err.message}`.underline.red.bold);
    server.close(() => {
      process.exit(1);
    });
  });
  

