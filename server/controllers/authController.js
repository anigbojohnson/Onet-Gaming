const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.signup = async (req, res) => {

  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({ email, password: hashedPassword });
    
    // Send JSON back to frontend
    res.status(201).json({ message: 'Signup successful, please login' });
  } catch (err) {

       // Handle unique constraint (duplicate email)
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Email already exists, please use another one' });
    }

    // Handle validation errors (like empty fields, wrong formats)
    if (err.name === 'SequelizeValidationError') {
      const messages = err.errors.map(e => e.message); // collect all validation messages
      return res.status(400).json({ message: messages.join(', ') });
    }

    // General fallback error
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input quickly
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Save session
    req.session.user = {
      id: user.id,
      email: user.email
    };

    res.status(200).json({ message: "Logged in successfully" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

