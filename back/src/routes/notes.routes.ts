const routerForNotes= require('express').Router();
const authForNotes= require('../middleware/auth');
const authAdminForNotes= require('../middleware/authAdmin');
const authGlobalForNotes= require('../middleware/auth_global');

const notesController = require('../controllers/notes.controller');

routerForNotes.get('/getByTrim/:id', authGlobalForNotes, authForNotes, notesController.getNotesByTrim);
routerForNotes.get('/getByTrimPeople/:trim_id/:student_id', authGlobalForNotes, authForNotes, notesController.getNotesByTrimPeoPle);
routerForNotes.get('/getAll', authGlobalForNotes, authForNotes, notesController.getAllNotes);
routerForNotes.get('/gt/:exam_id/:class_id', authGlobalForNotes, authForNotes, notesController.getTotalPoints);
// routerForNotes.get('/:id', authGlobalForNotes, authForNotes, notesController.getOneNotes);
routerForNotes.get('/all/:class_id/:exam_id', authGlobalForNotes, authForNotes, notesController.getNotes);
routerForNotes.post('/addOrUpdate', authGlobalForNotes, authForNotes, notesController.addOrUpdateNotes);
routerForNotes.get('/all2/:class_id/:exam_id', authGlobalForNotes, authForNotes, notesController.getNotes2);
routerForNotes.post('/addOrUpdate2', authGlobalForNotes, authForNotes, notesController.addOrUpdateNotes2);

routerForNotes.get('/all3/:class_id/:exam_id', authGlobalForNotes, authForNotes, notesController.getNotes3);
routerForNotes.post('/addOrUpdate3', authGlobalForNotes, authForNotes, notesController.addOrUpdateNotes3);

routerForNotes.post('/addOrUpdateStats', authGlobalForNotes, authForNotes, notesController.addOrUpdateStats);


routerForNotes.post('/calTrimNotes2', authGlobalForNotes, authForNotes, notesController.calTrimNotes2);

module.exports = routerForNotes;