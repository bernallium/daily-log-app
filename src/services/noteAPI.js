const BASE_URL = '/api/notes';

async function index() {
  return await fetch(BASE_URL).then(res => res.json());
}

const create = async (note) => {
  return await fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(note)
  }).then(res => res.json());
}

function update(note) {
  return fetch(`${BASE_URL}/${note._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(note)
  }).then(res => res.json());
}

const deleteOne = async (note) => {
  console.log('noteAPI: delete');
  return await fetch(`${BASE_URL}/${note._id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

export default {
  index,
  create,
  update,
  delete: deleteOne
};
