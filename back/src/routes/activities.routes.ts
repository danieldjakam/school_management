const routerForActivities = require('express').Router();
const authForActivities = require('../middleware/auth');
const authAdminForActivities = require('../middleware/authAdmin');
const authGlobalForActivities = require('../middleware/auth_global');

const ActivitiesController = require('../controllers/activities.controller');

routerForActivities.get('/all', authGlobalForActivities, authForActivities, ActivitiesController.all);
routerForActivities.get('/some/:id', authGlobalForActivities, authForActivities, ActivitiesController.some);
routerForActivities.get('/:id', authGlobalForActivities, authForActivities, ActivitiesController.one);
routerForActivities.post('/add', authGlobalForActivities, authAdminForActivities, ActivitiesController.store);
routerForActivities.put('/:id', authGlobalForActivities, authAdminForActivities, ActivitiesController.update);
routerForActivities.delete('/:id', authGlobalForActivities, authAdminForActivities, ActivitiesController.delete)
 
module.exports = routerForActivities;