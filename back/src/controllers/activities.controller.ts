module.exports.store = async (req, res) => {
    const {name, section, appreciationsNber, domainId} = req.body;
    if ( name && section && appreciationsNber && domainId) {
        if (name.length < 3 || name.length > 255) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 255 caracteres !!"})
        }
        else if (appreciationsNber < 0 || appreciationsNber > 20) {
            res.status(401).json({success: false, message: "Le total la matiere doit etre compris entre 0 et 20 "})
        }
        else{
            req.connection.query('INSERT INTO activities(name, appreciationsNber, section, domainId) VALUES(?, ?, ?, ?)', [name, appreciationsNber, section, domainId], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs svp !!"})
    }
}

module.exports.some = (req, res ) => {
    req.connection.query('SELECT activities.name, activities.id, activities.appreciationsNber as nber, sections.name as section_name FROM activities JOIN sections ON sections.id = activities.section WHERE domainId = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err)
        else res.status(201).json(resp);
    })
}

module.exports.all = (req, res) => {
    req.connection.query('SELECT activities.name, activities.id, activities.over, sections.name as section_name FROM activities JOIN sections ON sections.id = activities.section', (err, resp) => {
        if(err) console.log(err)
        else res.status(201).json(resp);
    })
}

module.exports.one = (req, res) => {
    req.connection.query('SELECT * FROM activities WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0]);
    })
}

module.exports.update = (req, res) => {
    const {name, section, appreciationsNber, domainId} = req.body;
    if ( name && section && appreciationsNber && domainId) {
        if (name.length < 3 || name.length > 255) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 255 caracteres !!"})
        }
        else if (appreciationsNber < 0 || appreciationsNber > 20) {
            res.status(401).json({success: false, message: "Le total la matiere doit etre compris entre 0 et 20 "})
        }
        else{
            req.connection.query('UPDATE activities SET name = ?, appreciationsNber = ? WHERE id = ? ', [name, appreciationsNber, req.params.id], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs svp !!"})
    }
}

module.exports.delete = (req, res) =>{
    const {id} = req.params;
    req.connection.query('DELETE FROM activities WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}