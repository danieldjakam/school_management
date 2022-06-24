module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const payload = req.jwt.verify(token, req.env.SECRET);
        if (payload.role === 'admin') {
            req.payload = payload;
            next();
        }else{
            res.status(401).json({success: false, message: 'Vous n\etes pas autorise a effectue cette action'})
        }
    } catch (err) {
        res.status(401).json({success: false, message: 'Bandits!!'})
    }
}