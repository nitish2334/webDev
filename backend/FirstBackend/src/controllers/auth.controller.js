import User from "../models/user.model.js";
import bcrypt from "bcrypt";


export const Registeruser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }
    const isVerified = await bcrypt.compare(password,existingUser.password)
    if(isVerified){
      const error = new Error ("Incorrect password");
      error.statusCode = 401;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registred");
      error.statusCode = 409;
      return next(error);
    }

    res.status(200).json({
      message:"Welcome Bcak",
      data:existingUser,

    });

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };
    const SAlT = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);


    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const Loginuser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const Logoutuser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};