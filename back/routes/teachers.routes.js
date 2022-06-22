const router = require('express').Router();
 
const auth = require('../middleware/auth');
const teachersController = require('../controllers/teachers.controller');

router.post('/add', auth, teachersController.addTeacher);
router.get('/getAll', auth, teachersController.getAllTeachers);
router.get('/:id', teachersController.getOneTeacher);
router.put('/:id', teachersController.updateTeacher);
router.delete('/:id', teachersController.deleteTeacher)

module.exports = router;