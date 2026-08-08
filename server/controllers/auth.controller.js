import User from "../models/auth.model.js";

export const signup = async (req, res) => {
    try {
        const { full_name, email, phone_no, password, userType } = req.body;

        if (!full_name || !email || !phone_no || !password || !userType) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const user = await User.findOne({ email: email })

        if (user) {
            return res.status(400).json({ message: "user already exist" })
        }
        const newUser = await User.create({
            full_name, email, phone_no, password, userType
        })
        res.status(201).json({
            message: "Account created successfully",
            data: newUser
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const user = await User.findOne({ email: email })

        if (user.password !== password) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        res.status(200).json({
            message: "login successfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}


