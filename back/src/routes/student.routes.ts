const routerForStudent = require('express').Router();
const authForStudent = require('../middleware/auth');
const authAdminForStudent = require('../middleware/authAdmin');
const authGlobalForStudent = require('../middleware/auth_global');

const studentController = require('../controllers/student.controller');

routerForStudent.get('/getAll', authGlobalForStudent, authForStudent, studentController.getAllStudent);
routerForStudent.get('/getOrdonnedStudents/:id', authGlobalForStudent, authForStudent, studentController.getOrdonnedStudents)
routerForStudent.get('/one/:id', authGlobalForStudent, authForStudent, studentController.getOneStudent);
routerForStudent.get('/:id', authGlobalForStudent, authForStudent, studentController.getSpecificStudents);
routerForStudent.post('/add/:id', authGlobalForStudent, authAdminForStudent, studentController.addStudent);
routerForStudent.put('/:id', authGlobalForStudent, authAdminForStudent, studentController.updateStudent);
routerForStudent.delete('/:id', authGlobalForStudent, authAdminForStudent, studentController.deleteStudent);

module.exports = routerForStudent;