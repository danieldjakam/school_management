const router = require('express').Router();
 
const auth = require('../middleware/auth');
const classController = require('../controllers/class.controller');

router.post('/add', auth, classController.addClass)
router.get('/getAll', auth, classController.getAllClass)
router.get('/getOAll', auth, classController.getAllOClass)
router.get('/special/:id', auth, classController.getSpecialClass)
router.get('/:id', auth, classController.getOneClass)
router.put('/:id', auth, classController.updateClass)
router.delete('/:id', auth, classController.deleteClass)

module.exports = router;