const routerForTeachers = require('express').Router();
const authForTeachers = require('../middleware/auth');
const authAdminForTeachers = require('../middleware/authAdmin');
const authGlobalForTeachers = require('../middleware/auth_global');

const teachersController = require('../controllers/teachers.controller');

routerForTeachers.get('/getAll', authGlobalForTeachers, authForTeachers, teachersController.getAllTeachers);
routerForTeachers.get('/regeneratePassword', authGlobalForTeachers, authForTeachers, teachersController.generateNewPasswords);
routerForTeachers.get('/downloadTeachersPassword', authGlobalForTeachers, teachersController.downloadTeachersPassword);
routerForTeachers.get('/:id', authGlobalForTeachers, authForTeachers, teachersController.getOneTeacher);
routerForTeachers.post('/add', authGlobalForTeachers, authAdminForTeachers, teachersController.addTeacher);
routerForTeachers.put('/:id', authGlobalForTeachers, authAdminForTeachers, teachersController.updateTeacher);
routerForTeachers.delete('/:id', authGlobalForTeachers, authAdminForTeachers, teachersController.deleteTeacher);

module.exports = routerForTeachers;