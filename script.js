const bars = document.querySelector('.bars');
const ul = document.querySelector('.nav-links');
const li = document.querySelectorAll('.nav-links li');


bars.addEventListener('click', (e) =>{
  
  ul.classList.toggle('active');
  li.forEach((link) => {
    link.style.animation = `navFade 0.5s ease forwards`;
  }) 

  bars.classList.toggle('toggle')
  
  e.preventDefault();
})
