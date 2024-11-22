import bcrypt from "bcrypt";
import TryCatch from "../utils/TryCatch.js";
import generateToken from "../utils/generateToken.js";
import { User } from "../models/User.js";

export const registerUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: "Email already exists" });

  const hashPassword = await bcrypt.hash(password, 12);

  user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  generateToken(user._id, res);

  res.status(201).json({
    user,
    message: "Registered ! 🚀",
  });
});


export const loginUser = TryCatch(async (req, res) => {
    const { email, password } = req.body;

    const user= await User.findOne({ email });

    if (!user)
        return res.status(400).json({
          message: "User not exist ❌ ! ",
        });

    const comparePassword = await bcrypt.compare(password, user.password);

    if(!comparePassword) return res.status(400).json({
        message: "Password is incorrect ❌ ! ",
    })

    generateToken(User._id, res);

    res.status(200).json({
        user,
        message: "Logged In ✅"
    })

})


export const myProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.user._id);
    res.status(200).json(user);
});


export const logoutUser = TryCatch(async (req, res) => {
    res.cookie("token", "", { maxAge: 0 });
    res.json({
      message: "Logged out successfully !✌️",
    });
  });