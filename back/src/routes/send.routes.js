const router = require('express').Router();
const auth = require('../middleware/auth');
const sendController = require('../controllers/send.controller');

router.get('/bulByEmail/:id', auth, sendController.sendBulletinToParentByEmail);

module.exports = router;