require('dotenv').config({path: '.env'})
const {env} = process;
const { sign } = require('jsonwebtoken');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
});

module.exports.addSeq = (req,res) => {
    const {name} = req.body;
    if (name && name !== '') {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de la sequence doit avoir au moins 3 caracteres!!'})
        }
        else{
            const id = sign(name, env.SECRET)
            connection.query('INSERT INTO seq(id, name) VALUES(?, ?)', [id,name], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllSeq = (req, res) => {
    connection.query('SELECT * FROM seq', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    }) 
}

module.exports.getOneSeq = (req, res) => {
    connection.query('SELECT * FROM seq WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    }) 
}

module.exports.deleteSeq = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM seq WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}