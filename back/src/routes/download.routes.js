const router = require('express').Router();
 
const auth = require('../middleware/auth');
const downloadController = require('../controllers/download.controller');

router.get('/csv/students/:id', downloadController.downloadStudentsCsv);
router.get('/pdf/students/:id', downloadController.downloadStudentsPdf)
router.get('/pdf/bul/:class_id/:student_id/:exam_id', downloadController.downloadBulletin)
router.get('/pdf/bul/:class_id/:exam_id', downloadController.downloadBulletinByClass)

module.exports = router;