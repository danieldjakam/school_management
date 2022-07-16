const routerForSeq = require('express').Router();
const authForSeq = require('../middleware/auth');
const authAdminForSeq = require('../middleware/authAdmin');
const authGlobalForSeq = require('../middleware/auth_global');

const seqController = require('../controllers/seq.controller');

routerForSeq.get('/getAll', authGlobalForSeq, authForSeq, seqController.getAllSeq);
routerForSeq.get('/:id', authGlobalForSeq, authForSeq, seqController.getOneSeq);
routerForSeq.post('/add', authGlobalForSeq, authAdminForSeq, seqController.addSeq);
routerForSeq.put('/:id', authGlobalForSeq, authAdminForSeq, seqController.update);
routerForSeq.delete('/:id', authGlobalForSeq, authAdminForSeq, seqController.deleteSeq);

module.exports = routerForSeq;