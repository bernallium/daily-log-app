const Note = require('../../models/note');

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne,
  showDay
};

async function index(req, res) {
  const allNotes = await Note.find({});
  res.status(200).json(allNotes);
}

// Get a specific note
function show(req, res) {
  Note.findById(req.params.id).then(note => {
    res.status(200).json(note);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Get this day's notes
function showDay(req, res) {
  Note.find({date: req.params.id}).then(note => {
    res.status(200).json(note);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Create a note
function create(req, res) {
  Note.create(req.body).then(createdNote => {
    res.status(201).json(createdNote);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Update a note
function update(req, res) {
  Note.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).then(updatedNote => {
    res.status(200).json(updatedNote);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Delete a note
function deleteOne(req, res) {
  Note.findByIdAndDelete(req.params.id).then(deletedNote => {
    res.status(200).json(deletedNote);
  }).catch(err => {
    res.status(400).json(err);
  })
}