require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//middelware
app.use(express.json());
app.use(cors());

//connect db
const connectDB = require('./config/connectDB');
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello from server");
});

//router
const router = require('./routes/userRoutes');
app.use("/api",router);

app.listen(3000);