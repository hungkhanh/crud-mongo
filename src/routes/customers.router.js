const router = require('express').Router();
const customersController = require('../controllers/customers.controller');

router.get('/', customersController.getAllCustomers);
router.post('/', customersController.createCustomer);
router.delete('/', customersController.deleteAllCustomers);

router.get('/:customerId', customersController.getOneCustomer);
router.put('/:customerId', customersController.updateOrCreateCustomer);
router.patch('/:customerId', customersController.updateCustomer);
router.delete('/:customerId', customersController.deleteOneCustomer);

module.exports = router;
