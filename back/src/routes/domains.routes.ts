const routerForDomains = require('express').Router();
const authForDomains = require('../middleware/auth');
const authAdminForDomains = require('../middleware/authAdmin');
const authGlobalForDomains = require('../middleware/auth_global');

const domainController = require('../controllers/domain.controller');

routerForDomains.get('/all', authGlobalForDomains, authForDomains, domainController.all);
routerForDomains.get('/:id', authGlobalForDomains, authForDomains, domainController.one);
routerForDomains.post('/add', authGlobalForDomains, authAdminForDomains, domainController.store);
routerForDomains.put('/:id', authGlobalForDomains, authAdminForDomains, domainController.update);
routerForDomains.delete('/:id', authGlobalForDomains, authAdminForDomains, domainController.delete)

module.exports = routerForDomains;