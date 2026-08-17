import jwt from "jsonwebtoken"
import User from "../models/auth.model.js"

const verifyToken = async(req ,res ,next) => {
  try {
        const authHeader = req.headers.authorization
        // console.log(authHeader);
        if(!authHeader){
            return res.status(401).json({message:"Unauthorized"})
        }

        const token = authHeader.split(" ")[1]
        // console.log(token);

        const decoded = jwt.verify(token , process.env.SECRET_KEY)
        // console.log(decoded);
        
        const user = await User.findById(decoded.userId).select("-password")
        // console.log(user);
        if(!user){
            return res.status(401).json({message:"user not found"})
        }
        req.user = user;
        next()
  } catch (error) {
    console.log("jwt verification error :" , error.message);
    return res.status(401).json({message:"Invalid or expired token"})
  }
}
export default verifyToken;