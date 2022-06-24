const router = require('express').Router();
 
const auth = require('../middleware/auth');
const studentController = require('../controllers/student.controller');

router.post('/add/:id', auth, studentController.addStudent)
router.get('/getAll', auth, studentController.getAllStudent)
router.get('/:id', auth, studentController.getSpecificStudents)
router.get('/one/:id', auth, studentController.getOneStudent)
router.put('/:id', auth, studentController.updateStudent)
router.delete('/:id', auth, studentController.deleteStudent)

module.exports = router;