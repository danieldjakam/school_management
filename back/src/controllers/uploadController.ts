const csvtojson = require('csvtojson')

module.exports.uploadStudentCsv = (req: any, res:any ) => {
    const {csvText} = req.body;
    
    csvtojson()
        .fromString(csvText)
        .then((students)=>{ 
            students.forEach(student => {
                req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
                    const {year_school} = respe[0];
                    const {name, subname, birthday, fatherName, phone_number, profession, class_name, email, sex, status} = student
                    req.connection.query('SELECT id FROM class WHERE name = ?', [class_name], (errr, resp) => {
                        req.connection.query(`INSERT INTO students(id, name, subname, class_id, sex, fatherName, profession,
                                                birthday, email, phone_number, school_year, status, school_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                                                [req.jwt.sign(name+year_school, req.env.SECRET), name, subname, resp[0].id, sex, fatherName, profession,
                                                birthday, email, phone_number.toString(), year_school, status, req.payload.school_id], (err, respp) => {
                            if(err) console.log(err);
                            else res.status(201).json({success: true})
                        })
                    })
                })
            })
        })
        .catch(err => {
            console.error(err);
            
        })
}


module.exports.uploadTeacherCsv = (req: any, res:any ) => {
    const {csvText} = req.body;
    
    csvtojson()
        .fromString(csvText)
        .then((teachers)=>{ 
            teachers.forEach(teacher => {
                req.connection.query('SELECT year_school FROM settings WHERE id = 1', (rerr, respe) => {
                    const {year_school} = respe[0];

                    const t = [];
                    for (let i = 0; i < 4; i++) {
                    const i = Math.round(Math.random() * 10);
                    t.push(i);
                    }
                    const password = t.join('')


                    const {name, subname, birthday, phone_number, sex, class_name} = teacher
                    let matricule = class_name.replace(' ', '')
                    matricule = matricule.toUpperCase()
                    req.connection.query('SELECT id FROM class WHERE name = ?', [class_name], (errr, resp) => {
                        req.connection.query(`INSERT INTO teachers(id, name, subname, class_id, sex,
                                                birthday, phone_number, school_id, matricule, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                                                [req.jwt.sign(name+year_school, req.env.SECRET), name, subname, resp[0].id, sex,
                                                birthday, phone_number.toString(), req.payload.school_id, matricule, password], (err, respp) => {
                            if(err) console.log(err);
                            else res.status(201).json({success: true})
                        })
                    })
                })
            })
        })
        .catch(err => {
            console.error(err);
        })
}