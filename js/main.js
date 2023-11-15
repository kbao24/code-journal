/* global data */

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
