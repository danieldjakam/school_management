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

module.exports.addTrimestre = async (req, res) => {
    const {name, seqIds} = req.body;
    console.log(seqIds);
    if ( name && name !== '' ) {
        if (name.length < 5 || name.length > 30) {
            res.status(401).json({success: false, message: "Le pseudo doit etre compris entre 5 et 30 caracteres !!"})
        }
        else{
            connection.query('INSERT INTO trims(id, name, seqIds) VALUES(?, ?, ?)', [sign(name, env.SECRET), name, JSON.stringify(seqIds)], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getAllTrimestre = (req, res) => {
    connection.query('SELECT * FROM trims', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    })
}

module.exports.getOneTrimestre = (req, res) => {
    connection.query('SELECT * FROM trims WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    })
}

module.exports.updateTrimestre = (req, res) => {
    const {name, slug} = req.body;
    if (name && name !== '' && slug && slug !== '') {
        connection.query('SELECT * FROM users WHERE name = ?', [name], (err, resp) => {
            if(resp.length < 1){
                res.status(401).json({success: false, message: 'nom de la matiere non reconnu'})
            }else{
                if (resp[0].slug === slug) {
                    const token = jwt.sign({
                        id: resp[0].id,
                        role: 'client'
                    }, env.SECRET)
                    res.status(401).json({success: true, token})
                }else{
                    res.status(401).json({success: false, message: ''})
                }
            }
        })
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.deleteTrimestre = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM trim WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}