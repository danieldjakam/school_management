require('dotenv').config({path: '.env'})
const {env} = process;
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator');
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
})

module.exports.register = async (req, res) => {
    const {username, email, password, confirm} = req.body;
    if (username && username !== '' && email && email !== '' && password && password !== '' && confirm && confirm !== '') {
        if (username.length < 5 || username.length > 30) {
            res.status(401).json({success: false, message: "Le pseudo doit etre compris entre 5 et 30 caracteres !!"})
        }
        else if (!isEmail(email)) {
            res.status(401).json({success: false, message: "Email incorrect !!"})
        }
        else if (password.length < 6) {
            res.status(401).json({success: false, message: "Le mot de passe doit contenir au moins 6 caracteres !!"})
        }
        else if (password !== confirm) {
            res.status(401).json({success: false, message: "Les deux mot de passe ne correspondent pas !!"})
        }
        else{
            connection.query('INSERT INTO users(id, username, email, password) VALUES(?, ?, ?, ?)', [jwt.sign(username, env.SECRET), username, email, password], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.login = (req, res) => {
    const {username, password} = req.body;
    if (username && username !== '' && password && password !== '') {
        connection.query('SELECT * FROM users WHERE username = ?', [username], (err, resp) => {
            if(resp.length < 1){
                connection.query('SELECT * FROM teachers WHERE matricule = ?', [username], (err2, resp2) => {
                    if(resp2.length < 1){
                        res.status(401).json({success: false, message: 'Utilisateur non reconnu'})
                    }else{
                        if ('semence' === password) {
                            const token = jwt.sign({
                                id: resp2[0].id,
                                role: 'teacher'
                            }, env.SECRET)
                            res.status(401).json({success: true, token, status: 'en', classId: resp2[0].class_id})
                        }else{
                            res.status(401).json({success: false, message: 'Mot de passe incorrect!!'})
                        }
                    }
                })
            }else{
                if (resp[0].password === password) {
                    const token = jwt.sign({
                        id: resp[0].id,
                        role: 'admin'
                    }, env.SECRET)
                    res.status(401).json({success: true, token, status: 'ad'})
                }else{
                    res.status(401).json({success: false, message: 'Mot de passe incorrect!!'})
                }
            }
        })
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getInfos = (req, res) => {
    connection.query('SELECT * FROM users WHERE id = ?', [req.payload.id] , (err, resp) => {
        res.status(201).json(resp[0])
    })
}

module.exports.getAllAdmin = (req, res) => {
    connection.query('SELECT * FROM users', [] , (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp);
    })
}

module.exports.deleteAdmin = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}

module.exports.getTeacherOrAdmin = (req, res) => {
    if (req.payload.role === 'admin') {
        connection.query('SELECT * FROM users WHERE id = ?', [req.payload.id] , (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp[0]);
        })  
    }else{
        connection.query('SELECT * FROM teachers WHERE id = ?', [req.payload.id] , (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp[0]);
        })
    }
}