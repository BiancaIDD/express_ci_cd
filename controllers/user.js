import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(201).json({
      message: 'User Created',
      id: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'error creating user',
    });
  }
};

export const getUser = async (req, res) => {
  const authHeader = req.header('Authorization');
  const verified = jwt.verify(authHeader, 'secret-key');
  const { id } = verified;
  try{
    const user = await User.findByPk(id)
    if (!user) {
      req.status(404).send({
        message: `the user with the ${id} was not found`
      });
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error getting user information'
    })
  }
};
