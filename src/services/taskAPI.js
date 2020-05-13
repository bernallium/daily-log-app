const BASE_URL = '/api/tasks';

// function index() {
//   return fetch(BASE_URL)
//   .then(res => res.json());
// }

async function index() {
  console.log('taskAPI: index');
  return await fetch(BASE_URL).then(res => res.json());
}

async function indexWeek() {
  console.log('taskAPI: indexWeek');
  return await fetch(`${BASE_URL}/week/1`).then(res => res.json())
}

// function create(task) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(task)
//   }).then(res => res.json());
// }

const create = async (task) => {
  console.log('taskAPI: create')
  return await fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(task)
  }).then(res => res.json());
}

function update(task) {
  return fetch(`${BASE_URL}/${task._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(task)
  }).then(res => res.json());
}

// function deleteOne(task) {
//   return fetch(`${BASE_URL}/${task._id}`, {
//     method: 'DELETE'
//   }).then(res => res.json());
// }

const deleteOne = async (task) => {
  console.log('taskAPI: delete');
  return await fetch(`${BASE_URL}/${task._id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export default {
  index,
  create,
  update,
  delete: deleteOne,
  indexWeek
};

// [x] router.get('/tasks', taskCtrlr.index); // Get all tasks
// [x] router.post('/tasks', taskCtrlr.create); // Create a task
// [ ] router.get('/tasks/:id', taskCtrlr.show); // Get this task
// [x] router.put('/tasks/:id', taskCtrlr.update); // Update this task
// [x] router.delete('/tasks/:id', taskCtrlr.delete); // Delete this task
// [ ] router.post('/days/:dayId/tasks', taskCtrlr.addToDay) // Adds a task to this day
