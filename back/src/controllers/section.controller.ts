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

module.exports.deleteSection = (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    req.connection.query('DELETE FROM sections WHERE id = ?', [id], (err, resp) => {
        if(err) console.log(err);
        else res.status(201).json({success: true})
    })
}