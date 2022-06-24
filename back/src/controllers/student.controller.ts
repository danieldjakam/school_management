module.exports.addStudent = (req, res) => {
    const {id} = req.params;
    const {name, subname, sex, birthday, email, phone_number, status} = req.body;
    if (!status) {
        const status = 'old'
    }
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
        else if (phone_number < 8) {
            res.status(401).json({success: false, message: 'Numero invalide'})
        }
        else if (status && status !== 'new' && status !== 'old') {
            res.status(401).json({success: false, message: 'Status de l\'eleve invalide'})
        }
        else{
            req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
                const {year_school} = respe[0];
                req.connection.query('INSERT INTO students(id, name, subname, class_id, sex, birthday, email, phone_number, school_year, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [req.sign(name+year_school, req.env.SECRET), name, subname, id, sex, birthday, email, phone_number.toString(), year_school, status], (err, resp) => {
                    if(err) console.log(err);
                    else res.status(201).json({success: true})
                })
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
            req.connection.query('UPDATE students SET name = ?, subname = ?, sex = ?, birthday = NOW(), email = ?, phone_number = ? WHERE id = ?', [name, subname, sex, email, phone_number.toString(), id], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllStudent = (req, res) => {
    req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('SELECT * FROM students WHERE school_year = ? ORDER BY name ASC', [year_school], (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp)
        })
    })
}

module.exports.getSpecificStudents = (req, res) => {
    req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
        const {year_school} = respe[0]
        req.connection.query('SELECT * FROM students WHERE class_id = ? AND school_year = ? AND status = "old" ORDER BY name ASC', [req.params.id, year_school] , (err, oldStudents) => {
            if(err) console.log(err);
            else {
                req.connection.query('SELECT * FROM students WHERE class_id = ? AND school_year = ? AND status = "new"', [req.params.id, year_school] , (err, newStudents) => {
                    const resp = [...oldStudents, ...newStudents]
                    res.status(201).json(resp)
                })
            }
        })
    })
}

module.exports.getOneStudent = (req, res) => {
    req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('SELECT * FROM students WHERE id = ? AND school_year = ?', [req.params.id, year_school] , (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp[0]);
        })
    })
}   

module.exports.deleteStudent = (req, res) => {
    const {id} = req.params;
    req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('DELETE FROM students WHERE id = ? AND school_year = ?', [id, year_school], (err, resp) => {
            res.status(201).json({success: true})
        })
    })
}

module.exports.getOrdonnedStudents = (req : any, res : any) => {
    req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('SELECT * FROM students WHERE class_id = ? AND school_year = ? ORDER BY name ASC', [req.params.id, year_school], (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp)
        })
    })
}