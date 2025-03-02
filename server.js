const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'school'
});

db.connect(err => {
    if (err) {
        console.error('Errr to connet to MySQL:', err);
        return;
    }
    console.log('Started MySQL');
});

// API To Add a sudent
app.post('/students', (req, res) => {
    const { name, class: studentClass } = req.body;
    if (!name || !studentClass) {
        return res.status(400).json({ error: 'Name and Clas NAme should be not empty' });
    }
    const query = 'INSERT INTO student (name, class) VALUES (?, ?)';
    db.query(query, [name, studentClass], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, name, class: studentClass });
    });
});

// API To Get a student by class
app.get('/students/:class', (req, res) => {
    const studentClass = req.params.class;
    const query = 'SELECT * FROM student WHERE class = ?';
    db.query(query, [studentClass], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Started server http://localhost:${port}`);
});
