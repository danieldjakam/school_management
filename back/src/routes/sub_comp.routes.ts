const routerForSubCom = require('express').Router();
const authForSubCom = require('../middleware/auth');
const authAdminForSubCom = require('../middleware/authAdmin');
const authGlobalForSubCom = require('../middleware/auth_global');

const subComController = require('../controllers/sub_com.controller');

routerForSubCom.get('/getAll', authGlobalForSubCom, authForSubCom, subComController.all);
routerForSubCom.get('/all/:com_id', authGlobalForSubCom, authForSubCom, subComController.some);
// routerForSubCom.get('/getAll/:com_id', authGlobalForSubCom, authForSubCom, subComController.getAllCompetenceForBul);
// routerForSubCom.get('/:id', authGlobalForSubCom, authForSubCom, subComController.getOneCompetence);
routerForSubCom.post('/add', authGlobalForSubCom, authAdminForSubCom, subComController.store);
routerForSubCom.put('/:id', authGlobalForSubCom, authAdminForSubCom, subComController.update);
routerForSubCom.delete('/:id', authGlobalForSubCom, authAdminForSubCom, subComController.delete)

module.exports = routerForSubCom;