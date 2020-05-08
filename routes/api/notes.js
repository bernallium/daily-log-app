const express = require('express');
const router = express.Router();

const noteCtrlr = require('../../controllers/api/note');

router.get('/', noteCtrlr.index); // Get all notes
router.post('/', noteCtrlr.create); // Create a note
router.get('/:id', noteCtrlr.show); // Get a single note
router.put('/:id', noteCtrlr.update); // Update a note
router.delete('/:id', noteCtrlr.delete); // Delete a note

module.exports = router;