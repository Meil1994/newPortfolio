import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/Token.js';
import Message from '../models/messageModel.js';

//Register
const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error('User already exists.')
    }

    const user = await User.create({
        username,
        email,
        password
    });

    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } else{
        res.status(400);
        throw new Error('Invalid Data')
    }

    res.status(200).json({message: 'User Registration Successfull'})
});

//Login
const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email:user.email
        })
    } else{
        res.status(401);
        throw new Error('Invalid Email or Password')
    }
});

//Logout
const logoutUser = asyncHandler(async(req, res)=> {
    res.cookie('jwt', '', {
        httpOnly:true,
        expires:new Date(0)
    });

    res.status(200).json({message: 'User logged out'});
});

//get User
const getUser = asyncHandler(async(req, res)=> {
    const user = {
        _id:req.user.id,
        username: req.user.username,
        email:req.user.email
    }
    res.status(200).json(user)
});

//Update
const updateUser = asyncHandler(async(req, res)=> {
    const user = await User.findById(req.user.id);

    if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id:updatedUser._id,
            username: updatedUser.username,
            email:updatedUser.email

        })
    } else {
       res.status(404);
       throw new Error('User not Found');
    }
});

// Send Message
const sendMessage = asyncHandler(async (req, res) => {
    const { message } = req.body;
    const email = req.user.email; 
  
    const newMessage = await Message.create({
      email,
      message,
    });
  
    if (newMessage) {
      res.status(201).json(newMessage);
    } else {
      res.status(400);
      throw new Error('Invalid Data');
    }
  });

export{registerUser, authUser, logoutUser, getUser, updateUser, sendMessage }