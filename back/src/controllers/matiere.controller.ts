module.exports.addMatiere = async (req, res) => {
    const {name, slug, section, comId, orale, ecrit, savEtre, pratique, oraleOver, ecritOver, savOver, pratiqueOver} = req.body;
    if ( name && name !== '' && slug && slug !== '' &&  section && section !== '' &&  comId && comId !== '' ) {
        if (name.length < 3 || name.length > 50) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 50 caracteres !!"})
        }
        else if (slug.length < 3) {
            res.status(401).json({success: false, message: "Slug trop court minimum 3 caracteres !!"})
        }
        else if (section !== 'en' && section !== 'fr' && section !== 'ma') {
            res.status(401).json({success: false, message: "Slug trop court minimum 3 caracteres !!"})
        }
        else{
            let tag = [];
            if (orale) {
                tag = [...tag, {
                    name: 'Orale',
                    over: oraleOver
                }]
            }
            if (ecrit) {
                tag = [...tag, {
                    name: 'Ecrit',
                    over: ecritOver
                }]
            }
            if (pratique) {
                tag = [...tag, {
                    name: 'Pratique',
                    over: pratiqueOver
                }]
            }
            if (savEtre) {
                tag = [...tag, {
                    name: 'Savoir Etre',
                    over: savOver
                }]
            }
            req.connection.query('INSERT INTO matiere(id, name, slug, section, comId, tags) VALUES(?, ?, ?, ?, ?, ?)', [req.jwt.sign(name, req.env.SECRET), name, slug, section, comId, JSON.stringify(tag)], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.getAllMatiere = (req, res) => {
    req.connection.query('SELECT * FROM matiere', (err, resp) => {
        if(err) console.log(err)
        else res.status(201).json(resp);
    })
}

module.exports.getAllMatiereByCom = (req, res) => {
    req.connection.query('SELECT * FROM matiere WHERE comId = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err)
        else res.status(201).json(resp);
    })
}

module.exports.getOneMatiere = (req, res) => {
    req.connection.query('SELECT * FROM matiere WHERE id = ?', [req.params.id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp[0]);
    })
}

module.exports.updateMatiere = (req, res) => {
    const {name, slug, section, comId, orale, ecrit, savEtre, pratique, oraleOver, ecritOver, savOver, pratiqueOver} = req.body;
    if ( name && name !== '' && slug && slug !== '' &&  section && section !== '' &&  comId && comId !== ''  ) {
        if (name.length < 3 || name.length > 50) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 50 caracteres !!"})
        }
        else if (slug.length < 3) {
            res.status(401).json({success: false, message: "Slug trop court minimum 3 caracteres !!"})
        }
        else if (section !== 'en' && section !== 'fr' && section !== 'ma') {
            res.status(401).json({success: false, message: "Slug trop court minimum 3 caracteres !!"})
        }
        else{
            // req.connection.query('UPDATE matiere SET name = ?, slug = ?, section = ?,comId = ? WHERE id = ?', [name, slug, section, comId, req.params.id], (err, resp) => {
            //     if(!err) res.status(201).json({success: true})
            //     else console.log(err);
            // })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.deleteMatiere = (req, res) =>{
    const {id} = req.params;
    req.connection.query('DELETE FROM matiere WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}