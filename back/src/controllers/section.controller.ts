module.exports.addSection = (req: any, res: any) => {
    const {name, type} = req.body;
    req.connection.query('INSERT INTO sections(name, type) VALUES(?, ?)', [name, type], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json({success: true})
    })
}

module.exports.getAllSection = (req, res) => {
    req.connection.query('SELECT * FROM sections', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    })
}

module.exports.getOneSection = (req, res) => {
    req.connection.query('SELECT * FROM sections WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    })
}

module.exports.updateSection = (req, res) => {
    const {name, type} = req.body;
    req.connection.query('UPDATE sections SET name = ?, type = ? WHERE id = ?', [name, type, req.params.id], (err, resp) => {
        if (err) res.status(401).json({success: false});
        else res.status(201).json({success: true})
    })
}

module.exports.deleteSection = (req, res) => {
    const {id} = req.params;    
    try {
        req.connection.query('SELECT * FROM class WHERE section = ?', [id], (err, resp) => {
            if (err) res.status(401).json({success: false, message: 'Une erreur est survenue : \n '+err});
            else{
                
                if (resp.length > 0) {
                    if (err) res.status(401).json({success: false, message: 'Veuillez supprimer toutes les classes affiliees a cette section pour continuer !!'});
                } else {
                    req.connection.query('DELETE FROM sections WHERE id = ?', [id], (err2, resp2) => {
                        if (err2) res.status(401).json({success: false, message: 'Une erreur est survenue : \n '+err2});
                        else res.status(201).json({success: true})
                    })
                }
            }    
        })
    } catch (e) {
        res.status(401).json({success: false, message: `Erreur : ${e}`})
    }
}