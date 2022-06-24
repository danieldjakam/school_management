const router = require('express').Router();
 
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const userController = require('../controllers/users.controllers');

router.post('/register', authAdmin, userController.register);
router.post('/login', userController.login);
router.get('/getInfos', auth, userController.getInfos)
router.get('/all', authAdmin, userController.getAllAdmin)
router.delete('/:id', authAdmin, userController.deleteAdmin)
router.get('/getTeacherOrAdmin', auth, userController.getTeacherOrAdmin)

module.exports = router;