import expressAsyncHandler from "express-async-handler";
// import bcrypt from "bcryptjs";
import signupData from "../model/signupModel.js";

export const userSignup = expressAsyncHandler(async (req, res) => {
    const {fname, lname, email, password, confirm }= req.body;

    try{

        const userExist = await signupData.findOne({ email: email});

        if (userExist){
            return res.status(422).json({error: "Email alreay exist"});
        } else if (password!= confirm) {
            return res.status(422).json({error: "Re-check the password"});
        } else{
            const user = new signupData({ fname, lname, email, password, confirm});

            await user.save();
            res.status(201).json({message: "user registered successfuly"});
        }
    } catch (err){
        console.log(err);
    }
});
