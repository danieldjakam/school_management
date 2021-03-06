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


module.exports.addClass = (req, res) => {
    const {name, section} = req.body;
    if (name && name !== '' && section && section !== '') {
        if (name.length < 4) {
            res.status(401).json({success: false, message: 'Le nom de la classe doit avoir au moins 3 caracteres!!'})
        }
        else if (section !== 'fr' && section !== 'en' && section !== 'ma') {
            res.status(401).json({success: false, message: 'Le nom de la classe doit avoir au moins 3 caracteres!!'})
        }
        else{
            connection.query('INSERT INTO class(id, name, section) VALUES(?, ?, ?)', [sign(name, env.SECRET), name, section], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.updateClass = (req, res) => {
    const {name, section} = req.body;
    const {id} = req.params;
    if (name && name !== '' && section && section !== '') {
        if (name.length < 4) {
            res.status(401).json({success: false, message: 'le nom doit avoir au moins 3 caracteres!!'})
        }
        else if (section !== 'fr' && section !== 'en' && section !== 'ma') {
            res.status(401).json({success: false, message: 'La section doit avoir au moins 3 caracteres!!'})
        }
        else{
            connection.query('UPDATE class SET name = ? , section = ? WHERE id = ?', [ name, section, id], (err, resp) => {
                if(err) console.log(err);

                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllClass = (req, res) => {
    connection.query('SELECT teachers.name as tName, class.id, teachers.subname as ts, class.name, class.section, teachers.id as tId, teachers.subname FROM teachers LEFT JOIN class ON class.id = teachers.class_id', (err, resp) => {
        res.status(201).json(resp);
    })
}
module.exports.getAllOClass = (req, res) => {
    connection.query('SELECT * FROM class', (err, resp) => {
        res.status(201).json(resp);
    })
}

module.exports.getSpecialClass = (req, res) => {
    connection.query('SELECT teachers.name as tName, teachers.subname as tSubname, class.id, teachers.subname as ts, class.name, class.section, teachers.id as tId, teachers.subname FROM class LEFT JOIN teachers ON class.id = teachers.class_id WHERE class.id = ?', [req.params.id], (err, resp) => {
        res.status(201).json(resp[0]);
    })
}

module.exports.getOneClass = (req, res) => {
    connection.query('SELECT * FROM class WHERE id = ?', [req.params.id], (err, resp) => {
        res.status(201).json(resp[0])
    })
}

module.exports.deleteClass = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM class WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}