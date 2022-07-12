module.exports.addStudent = (req, res) => {
    const {name, section_id} = req.body;
    if (name) {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de l\'exam annuel doit avoir au moins 3 caracteres!!'})
        }
        else{
            req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (rerr, respe) => {
                const {year_school} = respe[0];
                req.connection.query('INSERT INTO annual_exams(name, section_id, school_year) VALUES(?, ?, ?)', [name, section_id, year_school], (err, resp) => {
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
    const {name, section_id} = req.body;
    const {id} = req.params;
    if (name) {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de l\'exam annuel doit avoir au moins 3 caracteres!!'})
        }
        else{
            req.connection.query('UPDATE annual_exams SET name = ?, section_id = ? WHERE id = ?', [name, section_id, id], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAll = (req, res) => {
    req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('SELECT * FROM annual_exams WHERE school_year = ?', [year_school], (err, resp) => {
            if(err) console.log(err);
            else res.status(201).json(resp)
        })
    })
}

module.exports.deleteSection = (req, res) => {
    const {id} = req.params;
    req.connection.query('SELECT year_school FROM settings WHERE school_id = ?', [req.payload.school_id], (rerr, respe) => {
        const {year_school} = respe[0];
        req.connection.query('DELETE FROM annual_exams WHERE id = ? AND school_year = ?', [id, year_school, req.payload.school_id], (err, resp) => {
            res.status(201).json({success: true})
        })
    })
}