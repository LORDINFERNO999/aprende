const imageElement = document.getElementById('displayedImage');

document.querySelectorAll('a[data-img]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const imageSrc = link.getAttribute('data-img');
    imageElement.src = imageSrc;
    imageElement.style.display = 'block';
  });
});
