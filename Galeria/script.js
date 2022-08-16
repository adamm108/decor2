


const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
  console.log("działą");
  
});

const logo = $('p.logo');
setInterval(activeBlur,2000)
const activeBlur = function(){
  logo.addClass('activeLogo');
}
const logo2 = $('p.logo2');
setInterval(activeBlur2,2000)
const activeBlur2 = function(){
  logo2.addClass('activeLogo');
}


