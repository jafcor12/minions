const express = require('express')
const app = express()
var snowflake = require('snowflake-sdk');
const cors = require('cors')
const bodyParser = require('body-parser')


const port = 4001

var connection = snowflake.createConnection({
    account: "wdb59468.us-east-1",
    username: "jafcor06",
    password: "Hola1234!",
    database: "MOVIES",
    warehouse: "my_wh"
});

connection.connect(
    function (err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
        }
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
        }
    }
);

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/list', (req, res) => {
    const valor = connection.execute({
        sqlText: "SELECT * FROM PERSONA",
        complete: function (err, stmt, rows) {
            if (err) {
                console.error('Failed to execute statement due to the following error: ' + err.message);
            } else {
                res.send(rows);
            }
        }
    })
})

app.put('/api/update', (req, res) => {
    const id = req.body.ID
    const name = req.body.NAME
    const salary = req.body.SALARY
    const weakness = req.body.WEAKNESS
    connection.execute({
        sqlText: "update persona set NAME = ?, SALARY = ?, WEAKNESS = ? WHERE ID = ?",
        binds: [name, salary, weakness, id],
        complete: function (err, stmt, rows) {
            if (err) {
                console.error('Failed to execute statement due to the following error: ' + err.message);
            } else {
                res.send("Information updated");
            }
        }
    })
})

app.listen(port, () => {
    console.log(`App listening in server ${port}`)
})