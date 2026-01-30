const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:25,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        select:false,
    },
    username:{
        type:String,
        unique:true,
        trim:true,
    },
    avtar:{
        type:String,
        dafault:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    phone:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    address:{
        street:String,
        city:String,
        state:String,
        country:String,
        pincode:String,
    }

},{timestamps:true});

userSchema.pre("save",async function(){
    if(!this.isModified("password"));
    this.password = await bcrypt.hash(this.password,10);
    
})


module.exports = mongoose.model("user",userSchema);