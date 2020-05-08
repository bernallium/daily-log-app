const Note = require('../../models/note');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteNote,
};

// Get all notes from this day
function index(req, res) {
  Day.findById(req.params.dayId).then(day => {
    res.status(200).json(day.notes);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Get a specific note from this day
function show(req, res) {
  Day.findById(req.params.dayId).then(day => {
    const noteToShow = day.notes.id(req.params.id);
    res.status(200).json(noteToShow);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Create a note for this day
function create(req, res) {
  Day.findById(req.params.dayId).then(day => {
    day.notes.push(req.body);
    day.save();
    res.status(201).json(day);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Update a note from this day
function update(req, res) {
  Day.findById(req.params.dayId).then(day => {
    const noteToUpdate = day.notes.id(req.params.id);
    noteToUpdate.set(req.body);
    day.save();
    res.status(200).json(noteToUpdate);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Delete a note from this day
function deleteNote(req, res) {
  Day.findById(req.params.dayId).then(day => {
    day.notes.id(req.params.id).remove();
    day.save();
    res.sendStatus(200);
  }).catch(err => {
    res.status(400).json(err);
  });
}