const router = require('express').Router();
 
const auth = require('../middleware/auth');
const notesController = require('../controllers/notes.controller');

router.post('/addOrUpdate', auth, notesController.addOrUpdateNotes);
router.post('/addOrUpdateStats', auth, notesController.addOrUpdateStats)
router.get('/getByTrim/:id', notesController.getNotesByTrim)
router.get('/getByTrimPeople/:trim_id/:student_id', notesController.getNotesByTrimPeoPle)
router.get('/getAll', auth, notesController.getAllNotes);
router.get('/getTotalPoints', auth, notesController.getTotalPoints)
router.get('/:id', auth, notesController.getOneNotes);

module.exports = router;