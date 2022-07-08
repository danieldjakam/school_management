module.exports.addTrimestre = async (req, res) => {
    const {name, seqIds} = req.body;
    if ( name && name !== '' ) {
        if (name.length < 5 || name.length > 30) {
            res.status(401).json({success: false, message: "Le pseudo doit etre compris entre 5 et 30 caracteres !!"})
        }
        else{
            req.connection.query('INSERT INTO trims(id, name, seqIds) VALUES(?, ?, ?)', [req.jwt.sign(name, req.env.SECRET), name, JSON.stringify(seqIds)], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getAllTrimestre = (req, res) => {
    req.connection.query('SELECT * FROM trims', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    })
}

module.exports.getOneTrimestre = (req, res) => {
    req.connection.query('SELECT * FROM trims WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    })
}

module.exports.updateTrimestre = (req, res) => {
    const {name, slug} = req.body;
    if (name && name !== '' && slug && slug !== '') {
        req.connection.query('SELECT * FROM users WHERE name = ?', [name], (err, resp) => {
            if(resp.length < 1){
                res.status(401).json({success: false, message: 'nom de la matiere non reconnu'})
            }else{
                if (resp[0].slug === slug) {
                    const token = jwt.req.jwt.sign({
                        id: resp[0].id,
                        role: 'client'
                    }, req.env.SECRET)
                    res.status(401).json({success: true, token})
                }else{
                    res.status(401).json({success: false, message: ''})
                }
            }
        })
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.deleteTrimestre = (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    req.connection.query('DELETE FROM trims WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}