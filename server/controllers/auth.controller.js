import User from "../models/auth.model.js";

export const signup = async (req, res) => {
    try {
        const { name, user_name, email, phone_no, password, userType } = req.body;

        const user = await User.create({
            name, user_name, email, phone_no, password, userType
        })
        res.send(user)
    } catch (error) {
        console.log(error.message);
    }
}
export const login = async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const user = await User.findOne({ user_name: user_name })
        res.send(user)
    } catch (error) {
        console.log(error.message);
    }
}


