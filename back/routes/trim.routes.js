const router = require('express').Router();
 
const auth = require('../middleware/auth');
const trimController = require('../controllers/trim.controller');

router.post('/add', auth, trimController.addTrimestre);
router.get('/getAll', auth, trimController.getAllTrimestre);
router.get('/:id', auth, trimController.getOneTrimestre);
// router.get('/:id', teachersController.getOnmatiere);
// router.put('/:id',matiereController.updateMatiere);
router.delete('/:id', trimController.deleteTrimestre)

module.exports = router;