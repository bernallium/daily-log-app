const express = require('express');
const router = express.Router();

const taskCtrlr = require('../../controllers/api/task');

router.get('/', taskCtrlr.index); // Get all tasks
router.post('/', taskCtrlr.create); // Create a task
router.get('/:id', taskCtrlr.show); // Get this task
router.put('/:id', taskCtrlr.update); // Update this task
router.delete('/:id', taskCtrlr.delete); // Delete this task
// router.post('/days/:dayId/', taskCtrlr.addToDay) // Adds a task to this day

module.exports = router;