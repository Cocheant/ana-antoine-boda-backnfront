const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',  // Ensure the host is set to 'db'
  user: process.env.DB_USER || 'mysql',
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
