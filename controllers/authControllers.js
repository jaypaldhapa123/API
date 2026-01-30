const User = require('../models/user');
// const bcrypt = require('bcrypt');

exports.registerUser = async (req,res)=>{
    const {email} = req.body;
    try{
        const isExists = await User.findOne({email});
        if(isExists){
            res.status(400).json({
                success:false,
                msg:"user already exists"
            });
        }

        //hash password
        // const hashedPassword = await bcrypt.hash(password,10);
        // req.body.password = hashedPassword;

        //store everything into data base
        const user = await User.create(req.body);

        res.status(201).json({
            success:true,
            msg:"User registered successfully",
            user
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            msg:"faild to create new user",
            err
        })
    }
}

exports.fetchUsers = async (req,res)=>{
    try{
        const users = await User.find();
        res.json({
            users
        })
    }catch(err){
        res.json({
            success:false,
            msg:"faild to fetch all users"
        })
    }
    
}