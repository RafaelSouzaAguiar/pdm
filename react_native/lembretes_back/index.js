require('dotenv').config()
const express = require ('express')
const mysql2 = require('mysql2')
const app = express()
app.use(express.json())

const {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_SCHEMA
} = process.env

app.get('/lembretes', (req, res) => {
    const connection = mysql2.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
        database: DB_SCHEMA

    })

    connection.query(
        'SELECT * FROM tb_lembrete',
        (err, results, fields) => {
            console.log(results)
            res.json(results)
        }
    )
})

app.listen(
    PORT,
    () => console.log(`Back subiu na porta ${PORT}.`)
)