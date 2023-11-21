/* global data */

// issue 1
document.addEventListener('DOMContentLoaded', function () {
  const photoURL = document.getElementById('photo-url');
  const imgPreview = document.querySelector('.entry-image');

  photoURL.addEventListener('input', function () {
    const imgURL = this.value;
    imgPreview.src = imgURL;
  });
});

// submit event listener
const entryForm = document.querySelector('form');
// console.log(entryForm);

entryForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const photoURLInput = document.getElementById('photo-url').value;
  const notes = document.getElementById('bottom').value;

  const formData = {
    title,
    photoURLInput,
    notes,
  };

  data.nextEntryId++; // increment

  data.entries.unshift(formData); // add to beginning of object

  const imgPreview = document.querySelector('.entry-image');
  imgPreview.src = 'images/placeholder-image-square.jpg';

  entryForm.reset();
});

// issue 2
function renderEntry(entry) {
  const listItem = document.createElement('li');
  listItem.classList.add('entry');

  const entryContent = document.createElement('div');
  entryContent.classList.add('entry-content');

  const entryImage = document.createElement('img');
  entryImage.src = entry.imageURL;
  entryImage.alt = entry.title;

  const entryDetails = document.createElement('div');
  entryDetails.classList.add('entry-details');

  const entryTitle = document.createElement('h3');
  entryTitle.textContent = entry.title;

  const entryDescription = document.createElement('p');
  entryDescription.textContent = entry.description;

  entryDetails.appendChild(entryTitle);
  entryDetails.appendChild(entryDescription);

  entryContent.appendChild(entryImage);
  entryContent.appendChild(entryDetails);

  listItem.appendChild(entryContent);

  return listItem;
}

document.addEventListener('DOMContentLoaded', function () {
  const entriesList = document.querySelector('[data-view="entries"]');

  data.entries.forEach((entry) => {
    const entryElement = renderEntry(entry);
    entriesList.appendChild(entryElement);
  });
});
