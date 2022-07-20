module.exports.store = async (req, res) => {
    const {name, slug, section, comId, orale, ecrit, savEtre, pratique, oraleOver, ecritOver, savOver, pratiqueOver} = req.body;
    if ( name && name !== '' && slug && slug !== '' &&  section && section !== '' &&  comId && comId !== '' ) {
        if (name.length < 3 || name.length > 255) {
            res.status(401).json({success: false, message: "Le nom doit etre compris entre 5 et 255 caracteres !!"})
        }
        else if (slug.length < 3) {
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
            req.connection.query('INSERT INTO sub_com(id, name, slug, section, comId, tags) VALUES(?, ?, ?, ?, ?, ?)', [req.jwt.sign(name, req.env.SECRET), name, slug, section, comId, JSON.stringify(tag)], (err, resp) => {
                if(!err) res.status(201).json({success: true})
                else console.log(err);
            })
        }
    }else{
        res.status(401).json({success: false, message: "Remplir tous les champs ducond !!"})
    }
}

module.exports.all = (req : any, res : any) => {
    req.connection.query('SELECT * FROM sub_com', (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp);
    })
}


module.exports.some = (req : any, res : any) => {
    req.connection.query('SELECT * FROM sub_com WHERE comId = ?', [req.params.com_id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json(resp);
    })
}

module.exports.show = (req : any, res : any) => {
    req.connection.query('SELECT * FROM sub_com WHERE id = ?', [req.params.id], (err, resp) => {
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
            req.connection.query('UPDATE sub_com SET name = ?, section = ? WHERE id = ? ', [name, section, req.params.id], (err, resp) => {
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
    req.connection.query('DELETE FROM sub_com WHERE id = ?', [id], (err, resp) => {
        res.status(201).json({success: true})
    })
}