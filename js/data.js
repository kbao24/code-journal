/* exported data */

const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
export default data;

function saveData() {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
}

window.addEventListener('beforeunload', saveData);
