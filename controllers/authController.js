const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  res.status(201).json({ token: generateToken(user._id),
    message: "User registered successfully"
   });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  res.status(200).json({ token: generateToken(user._id),
    message: "Login successful"
   });
};

exports.dashboard = async (req, res) => {
  res.status(200).json({ message: `Welcome user ${req.user.id}` });
};


exports.logout = (req, res) => {
  // In a stateless API, logout is typically handled on the client side by deleting the token.
  res.status(200).json({ message: 'Logged out successfully' });
};