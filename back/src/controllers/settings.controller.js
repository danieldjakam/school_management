require('dotenv').config({path: '.env'})
const {env} = process;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
});

module.exports.get_settings = (req, res) => {
    connection.query('SELECT * FROM settings WHERE id = 1', (err, resp) => {
        res.status(201).json(resp[0])
    })
}

module.exports.editSettings = (req, res) => {
    const {id, year_school, is_editable} = req.body
    connection.query('UPDATE settings SET is_editable = ?, year_school = ? WHERE id = ?', [is_editable, year_school, id], (err, resp) => {
        if (err ) {
            console.log(err);
            res.status(401).json({
                success: false,
                message: 'Erreur'
            })
        }else{
            res.status(201).json({
                success: true
            })
        }
    })
}