const routerForCom = require('express').Router();
const authForcom = require('../middleware/auth');
const authAdminForcom = require('../middleware/authAdmin');
const authGlobalForcom = require('../middleware/auth_global');

const comController = require('../controllers/com.controller');

routerForCom.get('/getAll', authGlobalForcom, authForcom, comController.getAllCompetence);
routerForCom.get('/getAll/:section_id', authGlobalForcom, authForcom, comController.getAllCompetenceForBul);
routerForCom.get('/:id', authGlobalForcom, authForcom, comController.getOneCompetence);
routerForCom.post('/add', authGlobalForcom, authAdminForcom, comController.addCompetence);
routerForCom.put('/:id', authGlobalForcom, authAdminForcom, comController.updateCompetence);
routerForCom.delete('/:id', authGlobalForcom, authAdminForcom, comController.deleteCompetence)

module.exports = routerForCom;