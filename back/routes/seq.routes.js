const router = require('express').Router();
const seqController = require('../controllers/seq.controller');

router.get('/getAll', seqController.getAllSeq);
router.get('/:id', seqController.getOneSeq);
router.post('/add', seqController.addSeq);
router.delete('/:id', seqController.deleteSeq);

module.exports = router;