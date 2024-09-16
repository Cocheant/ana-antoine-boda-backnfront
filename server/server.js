const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // The React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST ||  'localhost',  // Ensure the host is set to 'db'
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'mydatabase',
  port: 3306
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the server');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sample POST API: Add New Invitation
app.post('/api/invitations', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO guests (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database insertion failed' });
    } else {
      res.status(201).json({ message: 'Invitation created', id: result.insertId });
    }
  });
});
