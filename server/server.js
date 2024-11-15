const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/users', (req, res) => {
  fs.readFile('users.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading users file');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  fs.readFile('users.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading users file');
    } else {
      let users = [];
      try {
        users = JSON.parse(data);
      } catch (parseErr) {
        return res.status(500).send('Error parsing users file');
      }

      // Check if the user already exists
      const userExists = users.some(user => user.username === newUser.username);
      if (userExists) {
        return res.status(400).send('User already exists');
      }

      users.push(newUser);
      fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send('Error writing users file');
        } else {
          res.status(201).json({ message: 'User added' });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});