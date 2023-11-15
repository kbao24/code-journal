/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

// event listener
function saveData() {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
}

window.addEventListener('beforeunload', saveData);

// conditional statement
const storedData = localStorage.getItem('myData');

if (storedData) {
  data = JSON.parse(storedData);
} else {
  data = {
    view: 'entry-form',
    entries: [],
    editing: null,
    nextEntryId: 1,
  };
}
