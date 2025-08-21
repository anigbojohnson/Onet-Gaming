const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // 👈 needed for JSON

// Enable CORS
app.use(cors());
// Session
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use('/api', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
