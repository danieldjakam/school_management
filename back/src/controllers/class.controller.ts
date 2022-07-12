module.exports.addClass = (req : any, res : any) => {
    let {name, section, level} = req.body;
    level = parseInt(level)
    if (name && name !== '' && section && section !== '' && level) {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de la classe doit avoir au moins 3 caracteres!!'})
        }
        else{
            req.connection.query('INSERT INTO class(id, name, level, section, school_id) VALUES(?, ?, ?, ?, ?)', [req.jwt.sign(name, req.env.SECRET), name, level, section, req.payload.school_id], (err: any, resp : any) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.updateClass = (req : any, res : any) => {
    let {name, section, level} = req.body;
    level = parseInt(level)
    const {id} = req.params;
    if (name && name !== '' && section && section !== '') {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'le nom doit avoir au moins 3 caracteres!!'})
        }
        else{
            req.connection.query('UPDATE class SET name = ? , section = ?, level = ? WHERE id = ?', [ name, section, level, id], (err: any, resp : any) => {
                if(err) console.log(err);

                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

// module.exports.getAllClass = (req : any, res : any) => {
//     req.connection.query('SELECT teachers.name as tName, class.id, teachers.subname as ts, class.name, class.section, teachers.id as tId, teachers.subname FROM teachers LEFT JOIN class ON class.id = teachers.class_id WHERE class.school_id = ? AND section = ?', [req.payload.school_id, req.section_id], (err: any, resp : any) => {
//         res.status(201).json(resp);
//     })
// }
module.exports.getAllClass = (req : any, res : any) => {
    req.connection.query('SELECT * FROM class WHERE school_id = ?', [req.payload.school_id], (err: any, resp : any) => {
        res.status(201).json(resp);
    })
}
module.exports.getAllOClass = (req : any, res : any) => {
    if (req.params.section_id !== 'nothing') {
        req.connection.query('SELECT * FROM class WHERE school_id = ? AND section = ?', [req.payload.school_id, req.params.section_id], (err: any, resp : any) => {
            res.status(201).json(resp);
        })
    } else {
        req.connection.query('SELECT * FROM class WHERE school_id = ?', [req.payload.school_id], (err: any, resp : any) => {
            res.status(201).json(resp);
        })
    }
}

module.exports.getSpecialClass = (req : any, res : any) => {
    req.connection.query('SELECT teachers.name as tName, teachers.subname as tSubname, class.id, teachers.subname as ts, class.name, class.section, teachers.id as tId, teachers.subname FROM class LEFT JOIN teachers ON class.id = teachers.class_id WHERE class.id = ? AND class.school_id = ?', [req.params.id, req.payload.school_id], (err: any, resp : any) => {
        if(err) console.log(err);
        res.status(201).json(resp[0]);
    })
}
module.exports.getOneClass = (req : any, res : any) => {
    req.connection.query('SELECT * FROM class WHERE id = ? AND school_id = ?', [req.params.id, req.payload.school_id], (err: any, resp : any) => {
        res.status(201).json(resp[0])
    })
}
module.exports.deleteClass = (req : any, res : any) => {
    const {id} = req.params;
    req.connection.query('DELETE FROM class WHERE id = ? AND school_id = ?', [id, req.payload.school_id], (err: any, resp : any) => {
        res.status(201).json({success: true})
    })
}