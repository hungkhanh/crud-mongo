const router = require('express').Router();
const offcidesController = require('../controllers/offices.controller');

router.get('/', offcidesController.getAllOffices)
router.post('/', offcidesController.createOffice)
router.delete('/', offcidesController.deleteAllOffices)

router.get('/:officeId', offcidesController.getOneOffice)
router.put('/:officeId', offcidesController.updateOrCreateOffice)
router.patch('/:officeId', offcidesController.updateOffice)
router.delete('/:officeId', offcidesController.deleteOneOffice)

module.exports = router;