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

module.exports.addCompetence = async (req, res) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5 || name.length > 30) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 30 caracteres !!"})
        }
        else if (section !== 'en' && section !== 'fr' && section !== 'ma') {
            res.status(401).json({success: false, message: "section invalide !!"})
        }
        else{
            connection.query('INSERT INTO com(id, name, section) VALUES(?, ?, ?)', [sign(name, env.SECRET), name, section], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getAllCompetence = (req, res) => {
    connection.query('SELECT * FROM com', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    })
}

module.exports.getOneCompetence = (req, res) => {
    connection.query('SELECT * FROM com WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    })
}

module.exports.updateCompetence = (req, res) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5 || name.length > 30) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 30 caracteres !!"})
        }
        else if (section !== 'en' && section !== 'fr' && section !== 'ma') {
            res.status(401).json({success: false, message: "section invalide !!"})
        }
        else{
            connection.query('UPDATE com SET name = ?, section = ? WHERE id = ? ', [name, section, req.params.id], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.deleteCompetence = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM com WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}