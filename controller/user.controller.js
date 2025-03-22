import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
const registerUser = async (req, res) => {
  // get data
  // validate
  // check if user is already exits
  //create a user in database
  //save token in database
  //send token as email to user
  // send success status to user

  console.log(req.body.email);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  res.send("registered");

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    //create a user in database

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log(user);
    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }
    //genertae token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    //save token in database
    user.verfificationToken = token;

    await user.save();

    //send mail - nodemailer - mailtrap

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    
    const mailOption={
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Verify your email", // Subject line
      html: "<b>Hello world?</b>", // html body
      text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify/${token}`


    }

  } catch (error) {}
};

export { registerUser };
