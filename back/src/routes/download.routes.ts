const routerForDownload = require('express').Router();
const authForDownload = require('../middleware/auth');
const authAdminForDownload = require('../middleware/authAdmin');
const authGlobalForDownload = require('../middleware/auth_global');

const downloadController = require('../controllers/download.controller');

routerForDownload.get('/csv/students/:id', authGlobalForDownload, downloadController.downloadStudentsCsv);
routerForDownload.get('/pdf/students/:id', authGlobalForDownload, downloadController.downloadStudentsPdf)
routerForDownload.get('/pdf/bul/:class_id/:student_id/:exam_id', authGlobalForDownload, downloadController.downloadBulletin)
routerForDownload.get('/pdf/bul/:class_id/:exam_id', authGlobalForDownload, downloadController.downloadBulletinByClass)

module.exports = routerForDownload;