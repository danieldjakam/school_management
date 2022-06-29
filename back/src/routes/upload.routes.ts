const routerForUplaod = require('express').Router();
const authForUplaod = require('../middleware/auth');
const authAdminForUplaod = require('../middleware/authAdmin');
const authGlobalForUplaod = require('../middleware/auth_global');

const uploadController = require('../controllers/uploadController');

routerForUplaod.post('/students/csv', authGlobalForUplaod, authAdminForUplaod, uploadController.uploadStudentCsv);
routerForUplaod.post('/teachers/csv', authGlobalForUplaod, authAdminForUplaod, uploadController.uploadTeacherCsv);

module.exports = routerForUplaod;