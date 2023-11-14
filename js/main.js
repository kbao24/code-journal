const photoURL = document.getElementById('photo-url');
const photoPreview = document.querySelector('.entry-image-preview');

photoURL.addEventListener('input', function () {
  photoPreview.src = this.value;
});
