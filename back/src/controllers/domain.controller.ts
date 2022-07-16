module.exports.store = async (req : any, res : any) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5) {
            res.status(401).json({success: false, message: "Le nom doit avoir au moins 5 caracteres !!"})
        }
        else{
            req.connection.query('INSERT INTO domains(name, section) VALUES(?, ?)', [name, section], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.all = (req : any, res : any) => {
    req.connection.query('SELECT domains.name, domains.id, sections.name as section_name FROM domains JOIN sections ON sections.id = domains.section', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp);
    })
}

module.exports.one = (req : any, res : any) => {
    req.connection.query('SELECT * FROM domains WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
        
    })
}

module.exports.update = (req : any, res : any) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5) {
            res.status(401).json({success: false, message: "Le nom doit avoir au moins 5 caracteres !!"})
        }
        else{
            req.connection.query('UPDATE domains SET name = ?, section = ? WHERE id = ? ', [name, section, req.params.id], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.delete = (req : any, res : any) => {
    const {id} = req.params;
    req.connection.query('DELETE FROM domains WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}