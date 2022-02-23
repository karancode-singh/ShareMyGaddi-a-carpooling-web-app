import User from "../Models/user.js";
import { check,validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import dotenv from "dotenv";

dotenv.config()

const signout = (req,res)=>{
    console.log(Object.values(req.cookies))
    
    if(Object.keys(req.cookies) != 'token' )
    {
        return res.status(400).json({
        message: "user already signedout"});
    
    }
    console.log(Object.keys(req.cookies))
    res.clearCookie("token")
    res.status(200).json({
        message: "user signout"
    });
}

const signup = (req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(422).json({
            error:error.array()[0].msg
        })
    }
    const new_user = new User(req.body);
    new_user.save((err,user)=>{
        console.log(err)
        if(err){
            return res.status(400).json({
                error:"User with this Email already regsitered with system",
            })
        }
        res.status(200);
        
        res.json({
            name :user.name,
            email: user.email,
            id: user._id
        })
    })
    
}

const signin = (req,res)=>{
    const {email,password} = req.body;
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(422).json({
            error:error.array()[0].msg
        })
    }
    
    User.findOne({email},(err,users)=>{
        if(err || !users ){
            return res.status(400).json({
                error:"User email does not exist"
            })
        }
        //console.log(users.authenticate(password))
        if(!users.authenticate(password)){
            return res.status(401).json({
                error:"Email and Password does not match"
            })

        }
        // create token and put in cookie
        const token = jwt.sign({_id:users._id},process.env.SECRET)
        // put in cookie
        res.cookie("token",token,{expire: new Date() +9999});
        // send response to front end
        const {_id,name,email,role} = users;
        res.status(200)
        return  res.json({
                    token,
                    user:{_id,name,email,role}
                })
    })
    
}

// is signed in route
const isSignedin= expressJwt({
    secret:process.env.SECRET,
    algorithms: ['sha1', 'RS256', 'HS256'],
    userProperty:"auth"
})

const isAuthenticated = (req,res,next) => {
    let check = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!check){
        return res.status(400).json({
            error:"Access denied"
        })
    }
    next()
}

export {signin, signout, signup, isSignedin, isAuthenticated}
