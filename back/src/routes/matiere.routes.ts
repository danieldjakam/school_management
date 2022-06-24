const routerForMatiere = require('express').Router();
const authForMatiere = require('../middleware/auth');
const authAdminForMatiere = require('../middleware/authAdmin');
const authGlobalForMatiere = require('../middleware/auth_global');

const matiereController = require('../controllers/matiere.controller');

routerForMatiere.get('/getAll', authGlobalForMatiere, authForMatiere, matiereController.getAllMatiere);
routerForMatiere.get('/getAllByCom/:id', authGlobalForMatiere, authForMatiere, matiereController.getAllMatiere);
routerForMatiere.get('/:id', authGlobalForMatiere, authForMatiere, matiereController.getOneMatiere);
routerForMatiere.post('/add', authGlobalForMatiere, authAdminForMatiere, matiereController.addMatiere);
routerForMatiere.put('/:id', authGlobalForMatiere, authAdminForMatiere, matiereController.updateMatiere);
routerForMatiere.delete('/:id', authGlobalForMatiere, authAdminForMatiere, matiereController.deleteMatiere)

module.exports = routerForMatiere;