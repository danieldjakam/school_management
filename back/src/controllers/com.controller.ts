module.exports.addCompetence = async (req : any, res : any) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5) {
            res.status(401).json({success: false, message: "Le nom doit avoir au moins 5 caracteres !!"})
        }
        else{
            req.connection.query('INSERT INTO com(id, name, section) VALUES(?, ?, ?)', [req.jwt.sign(name, req.env.SECRET), name, section], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getAllCompetence = (req : any, res : any) => {
    req.connection.query('SELECT * FROM com', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
        console.log(resp);
    })
}


module.exports.getAllCompetenceForBul = (req : any, res : any) => {
    req.connection.query('SELECT * FROM com WHERE section = ?', [req.params.section_id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
        console.log(resp);
    })
}
module.exports.getOneCompetence = (req : any, res : any) => {
    req.connection.query('SELECT * FROM com WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
        
    })
}

module.exports.updateCompetence = (req : any, res : any) => {
    const {name, section} = req.body;
    if ( name && name !== '' && section && section !== '' ) {
        if (name.length < 5) {
            res.status(401).json({success: false, message: "Le nom doit avoir au moins 5 caracteres !!"})
        }
        else{
            req.connection.query('UPDATE com SET name = ?, section = ? WHERE id = ? ', [name, section, req.params.id], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.deleteCompetence = (req : any, res : any) => {
    const {id} = req.params;
    req.connection.query('DELETE FROM com WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}