const routerForNotes= require('express').Router();
const authForNotes= require('../middleware/auth');
const authAdminForNotes= require('../middleware/authAdmin');
const authGlobalForNotes= require('../middleware/auth_global');

const notesController = require('../controllers/notes.controller');

routerForNotes.get('/getByTrim/:id', authGlobalForNotes, authForNotes, notesController.getNotesByTrim);
routerForNotes.get('/getByTrimPeople/:trim_id/:student_id', authGlobalForNotes, authForNotes, notesController.getNotesByTrimPeoPle);
routerForNotes.get('/getAll', authGlobalForNotes, authForNotes, notesController.getAllNotes);
routerForNotes.get('/getTotalPoints', authGlobalForNotes, authForNotes, notesController.getTotalPoints);
routerForNotes.get('/:id', authGlobalForNotes, authForNotes, notesController.getOneNotes);
routerForNotes.post('/addOrUpdate', authGlobalForNotes, authForNotes, notesController.addOrUpdateNotes);
routerForNotes.post('/addOrUpdateStats', authGlobalForNotes, authForNotes, notesController.addOrUpdateStats);

module.exports = routerForNotes;