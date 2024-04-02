const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection Configs
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

connection.connect();

const sql = `INSERT INTO people(name) values('John Doe')`;
connection.query(sql);

app.get('/', (req, res) => {
  connection.query('SELECT * FROM people', (err, results) => {
    if (err) throw err;

    const names = results
      .map((row) => `<tr><td>${row.name}</td></tr>`)
      .join('');

    res.send(`<h1>Full Cycle Rocks!</h1><table>${names}</table>`);
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
