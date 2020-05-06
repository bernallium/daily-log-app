const BASE_URL = '/api/tasks';

export function index() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(task) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(task)
  }).then(res => res.json());
}

export function update(task) {
  return fetch(`${BASE_URL}/${task._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(task)
  }).then(res => res.json());
}

export function deleteOne(task) {
  return fetch(`${BASE_URL}/${tasl._id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

// [x] router.get('/tasks', taskCtrlr.index); // Get all tasks
// [x] router.post('/tasks', taskCtrlr.create); // Create a task
// [ ] router.get('/tasks/:id', taskCtrlr.show); // Get this task
// [x] router.put('/tasks/:id', taskCtrlr.update); // Update this task
// [x] router.delete('/tasks/:id', taskCtrlr.delete); // Delete this task
// [ ] router.post('/days/:dayId/tasks', taskCtrlr.addToDay) // Adds a task to this day
