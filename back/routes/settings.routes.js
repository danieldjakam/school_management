const router = require('express').Router();
const settingsController = require('../controllers/settings.controller');
const authAdmin = require('../middleware/authAdmin');

// router.get('/school_year', seqController.getAllSeq);
// router.get('/is_editable_notes_time', seqController.getOneSeq);
// router.post('/edit_school_year', seqController.addSeq);
router.get('/getSettings', authAdmin, settingsController.get_settings)
router.post('/setSettings', authAdmin, settingsController.editSettings)
// router.delete('/edit_ient', seqController.deleteSeq);


module.exports = router;