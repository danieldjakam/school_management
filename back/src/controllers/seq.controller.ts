module.exports.addSeq = (req,res) => {
    const {name} = req.body;
    if (name && name !== '') {
        if (name.length < 3) {
            res.status(401).json({success: false, message: 'Le nom de la sequence doit avoir au moins 3 caracteres!!'})
        }
        else{
            const id = req.jwt.sign(name, req.env.SECRET)
            req.connection.query('INSERT INTO seq(id, name) VALUES(?, ?)', [id,name], (err, resp) => {
                if(err) console.log(err);
                else res.status(201).json({success: true})
            })
        }
    }else{
        res.status(401).json({success: false, message: 'Svp remplissez tous les champs !!'})
    }
}

module.exports.getAllSeq = (req, res) => {
    req.connection.query('SELECT * FROM seq', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp)
    }) 
}

module.exports.getOneSeq = (req, res) => {
    req.connection.query('SELECT * FROM seq WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0])
    }) 
}

module.exports.deleteSeq = (req, res) => {
    const {id} = req.params;
    req.connection.query('DELETE FROM seq WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}