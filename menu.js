const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');


let miniMenuShowed = false;

burgerIcon.addEventListener('click', function(){
  miniMenuShowed = !miniMenuShowed
  mobileNav.classList.toggle('active');
  burgerIcon.classList.toggle('active');
  mobileNav.classList.toggle('displayblock');
})


onresize = (event) => {
  if(window.innerWidth > 1000 && miniMenuShowed) {
    mobileNav.classList.remove('active');
    burgerIcon.classList.remove('active');
    mobileNav.classList.remove('displayblock');
    miniMenuShowed = false;
  }
};
