const router = require('express').Router();
 
// const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const teachersController = require('../controllers/teachers.controller');

router.post('/add', authAdmin, teachersController.addTeacher);
router.get('/getAll', authAdmin, teachersController.getAllTeachers);
router.get('/regeneratePassword', authAdmin, teachersController.generateNewPasswords)
router.get('/downloadTeachersPassword', teachersController.downloadTeachersPassword)
router.get('/:id', authAdmin, teachersController.getOneTeacher);
router.put('/:id', authAdmin, teachersController.updateTeacher);
router.delete('/:id', authAdmin, teachersController.deleteTeacher)

module.exports = router;