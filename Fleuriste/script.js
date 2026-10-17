
const liens = document.querySelectorAll('.nav a');

liens.forEach((lien) => {
  lien.addEventListener('click', () => {
    liens.forEach((autreLien) => {
      autreLien.removeAttribute('aria-current');
    });

    lien.setAttribute('aria-current', 'page');
  });
});
