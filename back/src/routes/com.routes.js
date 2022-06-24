const router = require('express').Router();
 
const auth = require('../middleware/auth');
const comController = require('../controllers/com.controller');

router.post('/add', auth, comController.addCompetence);
router.get('/getAll', auth, comController.getAllCompetence);
router.get('/:id', auth, comController.getOneCompetence);
router.put('/:id', auth, comController.updateCompetence);
router.delete('/:id', auth, comController.deleteCompetence)

module.exports = router;