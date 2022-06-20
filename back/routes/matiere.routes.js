const router = require('express').Router();
 
const auth = require('../middleware/auth');
const matiereController = require('../controllers/matiere.controller');

router.post('/add', auth, matiereController.addMatiere);
router.get('/getAll', auth, matiereController.getAllMatiere);
router.get('/getAllByCom/:id', auth, matiereController.getAllMatiere);
router.get('/:id',matiereController.getOneMatiere);
router.put('/:id', matiereController.updateMatiere);
router.delete('/:id', matiereController.deleteMatiere)

module.exports = router;