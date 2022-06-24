module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    try {
        const payload = req.jwt.verify(token, req.env.SECRET);
        req.payload = payload;
        next();
    } catch (err) {
        res.status(401).json({success: false, message: 'Bandits!!'})
    }
}