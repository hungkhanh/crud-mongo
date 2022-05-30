const router = require('express').Router();
const employeesController = require('../controllers/employees.controller');

router.get('/', employeesController.getAllEmployees);
router.post('/', employeesController.createEmployee);
router.delete('/', employeesController.deleteAllEmployees);

router.get('/:employeeId', employeesController.getOneEmployee);
router.put('/:employeeId', employeesController.updateOrCreateEmployee);
router.patch('/:employeeId', employeesController.updateEmployee);
router.delete('/:employeeId', employeesController.deleteOneEmployee);

router.get('/:employeeId/listCustomers', employeesController.listCustomers);
router.get('/:employeeId/listStaffs', employeesController.listStaffs);

module.exports = router;
