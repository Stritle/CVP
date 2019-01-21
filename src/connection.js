
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '925949100',
    database: 'cvp'
});

connection.connect()

connection.query('SELECT * FROM new_table', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()