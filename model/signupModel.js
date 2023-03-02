import mongoose from 'mongoose'

const signupSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirm:{
        type:String,
        required:true
    }
})

const signupData = mongoose.model('usersignup', signupSchema);
export default signupData