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


module.exports.addTeacher = (req, res) => {
    const {name, subname, classId} = req.body;
    const id = sign(name, env.SECRET);
    if (name && name !== '' && subname && subname !== '' && classId && classId !== '') {
        if (name.length < 0) {
            res.status(401).json({success: false, message: 'Le nom de l\'enseignant doit avoir au moins 3 caracteres!!'})
        }
        else if (subname.length < 0) {
            res.status(401).json({success: false, message: 'Le prenom de l\'enseignant doit avoir au moins 3 caracteres!!'})
        }
        else{
            const t = [];
            for (let i = 0; i < 6; i++) {
              const i = Math.round(Math.random() * 10);
              t.push(i);
            }

            connection.query('SELECT name FROM class WHERE id = ? ', [classId], (erroorr, succc) => {
                if (erroorr) {
                    console.log(erroorr);
                }else{
                    let {name} = succc[0]
                    name = name.replace(' ', '')
                    name = name.toUpperCase()
                    const code = 'SEM-'+name;
                    connection.query('INSERT INTO teachers(id, name, subname, class_id, matricule) VALUES(?, ?, ?, ?, ?)', [id, name, subname, classId, code], (err, resp) => {
                        if(err) console.log(err);

                        else {
                            connection.query('UPDATE class SET teacherId = ? WHERE id = ?', [id, classId], (err2, resp2) => {
                                if(!err2) res.status(201).json({success: true})
                                else console.log(resp2);
                            })
                        }
                    })
                }
            })

            
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}
 
module.exports.updateTeacher = (req, res) => {
    const {name, subname, class_id, OldclassId} = req.body;
    const {id} = req.params;
    if (name && name !== '' && subname && subname !== '' && class_id && class_id !== '') {
        if (name.length < 4) {
            res.status(401).json({success: false, message: 'Le nom de l\'enseignant doit avoir au moins 3 caracteres!!'})
        }
        else if (subname.length < 4) {
            res.status(401).json({success: false, message: 'Le prenom de l\'enseignant doit avoir au moins 3 caracteres!!'})
        }
        else{
            connection.query('UPDATE teachers SET name = ? , subname = ?, class_id = ? WHERE id = ?', [ name, subname, class_id, id], (err, resp) => {
                if(err) console.log(err);

                else {
                    connection.query('UPDATE class SET teacherId = ? WHERE id = ?', [null, OldclassId], (err2, resp2) => {
                        if (err2) {
                            if(!err2) res.status(201).json({success: true})
                            else console.log(err2);
                        }else{
                            connection.query('UPDATE class SET teacherId = ? WHERE id = ?', [class_id, OldclassId], (err3, resp2) => {
                                if(!err3) res.status(201).json({success: true})
                                else console.log(err3);
                            })
                        }
                    })
                }
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllTeachers = (req, res) => {
    connection.query('SELECT teachers.name, teachers.matricule, class.name as className, teachers.id, teachers.subname FROM teachers LEFT JOIN class ON class.id = teachers.class_id', (err, resp) => {
        if(err) console.log(err);
        res.status(201).json(resp)
    })
}

module.exports.getOneTeacher = (req, res) => {
    connection.query('SELECT * FROM teachers WHERE id = ?', [req.params.id] , (err, resp) => {
        if(err) console.log(err);
        res.status(201).json(resp[0])
    })
}

module.exports.deleteTeacher = (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM teachers WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}