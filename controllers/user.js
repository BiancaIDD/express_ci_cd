import User from "../models/User.js"
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    res.status(201).json({
      "message": "User Created",
      "id": user.id
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      "message": "error creating user"
    })
  }
}

