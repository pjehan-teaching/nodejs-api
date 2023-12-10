import Prism from 'prismjs';
import './css/style.scss';

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  document.querySelectorAll('.instructions > ul li').forEach(el => {
    el.addEventListener('click', function(event) {
      event.currentTarget.classList.toggle('done');
    });
  });

});
