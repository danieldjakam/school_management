require('dotenv').config({path: '.env'})
const {env} = process;
const { sign } = require('jsonwebtoken');
const mysql = require('mysql2');
const {isEmail} = require('validator')
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
});

module.exports.addStudent = (req, res) => {
    const {id} = req.params;
    const {name, subname, sex, birthday, email, phone_number} = req.body;
    if (name && name !== '' && subname && subname !== '' && sex && sex !== '' && birthday && birthday !== '') {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de l\'eleve doit avoir au moins 3 caracteres!!'})
        }
        else if (subname.length < 3) {
            res.status(401).json({success: false, message: 'Le prenom de l\'eleve doit avoir au moins 3 caracteres!!'})
        }
        else if (sex !== 'f' && sex !== 'm') {
            res.status(401).json({success: false, message: 'Sexe invalide'})
        }
        else if (!isEmail(email)) {
            res.status(401).json({success: false, message: 'Format d\'email invalide'})
        }
        else if (phone_number.length < 8) {
            res.status(401).json({success: false, message: 'Numero invalide'})
        }
        else{
            connection.query('INSERT INTO students(id, name, subname, class_id, sex, birthday, email, phone_number) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [sign(name, env.SECRET), name, subname, id, sex, birthday, email, phone_number.toString()], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.updateStudent = (req, res) => {
    const {id} = req.params;
    const {name, subname, sex, birthday, email, phone_number} = req.body;
    if (name && name !== '' && subname && subname !== '' && sex && sex !== '' && birthday && birthday !== '') {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de l\'eleve doit avoir au moins 3 caracteres!!'})
        }
        else if (subname.length < 3) {
            res.status(401).json({success: false, message: 'Le prenom de l\'eleve doit avoir au moins 3 caracteres!!'})
        }
        else if (sex !== 'f' && sex !== 'm') {
            res.status(401).json({success: false, message: 'Sexe invalide'})
        }
        else if (!isEmail(email)) {
            res.status(401).json({success: false, message: 'Format d\'email invalide'})
        }
        else if (phone_number.length < 8) {
            res.status(401).json({success: false, message: 'Numero invalide'})
        }
        else{
            const month = new Date(birthday).getMonth() > 9 ? new Date(birthday).getMonth() : '0'+new Date(birthday).getMonth().toString();
            const day = new Date(birthday).getDate() > 9 ? new Date(birthday).getDate() : '0'+new Date(birthday).getDate().toString();
            const date = new Date(birthday).getUTCFullYear() + '-'+ month + "-" + day;
            connection.query('UPDATE students SET name = ?, subname = ?, sex = ?, birthday = NOW(), email = ?, phone_number = ? WHERE id = ?', [name, subname, sex, email, phone_number.toString(), id], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllStudent = (req, res) => {
    connection.query('SELECT * FROM students', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    })
}

module.exports.getSpecificStudents = (req, res) => {
    connection.query('SELECT * FROM students WHERE class_id = ?', [req.params.id] , (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp);
    })
}

module.exports.getOneStudent = (req, res) => {
    connection.query('SELECT * FROM students WHERE id = ?', [req.params.id] , (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0]);
    })
}

module.exports.deleteStudent = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM students WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}