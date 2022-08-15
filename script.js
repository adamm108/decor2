
var slides = document.querySelectorAll('#slides .slide');
var currentSlide =0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {

    slides[currentSlide].className = "slide";
    currentSlide =(currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    console.log("slidy")
}

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
  console.log("działą");
  
});
/*$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  console.log(scrollValue);

  const $roller1 =$('.roller1');
  const roller1fromTop = $roller1.offset().top
  const $roller2 =$('.roller2');
  const roller2fromTop = $roller2.offset().top
  const $roller3 =$('.roller3');
  const roller3fromTop = $roller3.offset().top
  const $roller4 =$('.roller4');
  const roller4fromTop = $roller4.offset().top
  const $roller5 =$('.roller5');
  const roller5fromTop = $roller5.offset().top
  const $roller6 =$('.roller6');
  const roller6fromTop = $roller6.offset().top
  
  const roller1Height = $roller1.outerHeight()
  const roller2Height = $roller2.outerHeight()
  const roller3Height = $roller3.outerHeight()
  const roller4Height = $roller4.outerHeight()
  const roller5Height = $roller5.outerHeight()
  const roller6Height = $roller6.outerHeight()

  if (scrollValue > roller1fromTop - windowHeight) {
    console.log("jestem art 2 wywietlony w całości");
    $roller1.addClass('activeRoller');
  }

  if (scrollValue > roller2fromTop - windowHeight) {
    console.log("jestem art 3 wywietlony w całości");
    $roller2.addClass('activeRoller');
  }

  if (scrollValue > roller3fromTop  - windowHeight){
    console.log("jestem art 4 wywietlony w całości");
    $roller3.addClass('activeRoller');
  }
  if (scrollValue > roller4fromTop - windowHeight){
    console.log("jestem art 4 wywietlony w całości");
    $roller4.addClass('activeRoller');
  }
  if (scrollValue > roller5fromTop  - windowHeight){
    console.log("jestem art 4 wywietlony w całości");
    $roller5.addClass('activeRoller');
  }
  if (scrollValue > roller6fromTop - windowHeight){
    console.log("jestem art 6 wywietlony w całości");
    $roller6.addClass('activeRoller');
  }
 
  if (scrollValue <700){
    $roller1.removeClass('activeRoller');
    console.log("czyszcze");
    $roller2.removeClass('activeRoller');
    $roller3.removeClass('activeRoller');
    $roller4.removeClass('activeRoller');
    $roller5.removeClass('activeRoller');
    $roller6.removeClass('activeRoller');
  
 }

})*/
$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $bigmenu =$('.bigmenu');
  const bigmenufromTop = $bigmenu.offset().top
  const bigmenuHeight = $bigmenu.outerHeight()

  if (scrollValue > bigmenufromTop - bigmenuHeight) {

    $bigmenu.addClass('activeBigMenu');}
    

})
$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $container =$('div.container');
  const containerfromTop = $container.offset().top
  const containerHeight = $container.outerHeight()
  
  

  if (scrollValue > containerfromTop - windowHeight/2) {
    $container.addClass('activeContainer');}

    
    

})
$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const $information =$('section.information');
  const scrollValue = $(this).scrollTop();
  const informationfromTop = $information.offset().top
if (scrollValue > informationfromTop - windowHeight/2){
  $information.addClass('activeInformation');
}
})
$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const $gall6 =$('div.gall6');
  const scrollValue = $(this).scrollTop();
  const $logos1 = $('div.logos1');
  const $logos2 = $('div.logos2');
  const $logos3 = $('div.logos3')
  const gall6fromTop = $gall6.offset().top
if (scrollValue > gall6fromTop - windowHeight/3){
  $logos1.addClass('activeLogos1');
  $logos2.addClass('activeLogos2');
  $logos3.addClass('activeLogos3');
  console.log("dodajeLogo");
}
})
//logo animowane na dole strony


$(document).on('scroll', function (){
const logo = $('p.logo');
const logo2 = $('p.logo2');
const floatBig =$('div.floatBig');
const floatBigfromTop = floatBig.offset().top
const windowHeight = $(window).height();
const scrollValue = $(this).scrollTop();
if (scrollValue > windowHeight*3){
  setTimeout(function (){
  logo.addClass('activeLogo');
  logo2.addClass('activeLogo');
  console.log(scrollValue);
}, 4000);
}

})


const logo = $('p.logo');

const activeBlur = function(){
  logo.addClass('activeLogo');
}
setInterval(activeBlur,2000)
const logo2 = $('p.logo2');
const activeBlur2 = function(){
  logo2.addClass('activeLogo');
}
setInterval(activeBlur2,2000)

//animacja sekcji about//

$(document).on('scroll', function (){
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $art1 = $('article.art1');
  const art1fromTop = $art1.offset().top
  //const containerHeight = $container.outerHeight()
  
  

  if (scrollValue > art1fromTop - windowHeight/2) {
    $art1.addClass('activeart1');}}
    )
    $(document).on('scroll', function (){
      const windowHeight = $(window).height();
      const scrollValue = $(this).scrollTop();
      const $art2 = $('article.art2');
      const art2fromTop = $art2.offset().top
      //const containerHeight = $container.outerHeight()
      
      
    
      if (scrollValue > art2fromTop - windowHeight/2) {
        $art2.addClass('activeart2');}}
        )
      
          
          $(document).on('scroll', function (){
            const windowHeight = $(window).height();
            const scrollValue = $(this).scrollTop();
            const $art3 = $('article.art3');
            const art3fromTop = $art3.offset().top
            //const containerHeight = $container.outerHeight()
            
            
          
            if (scrollValue > art3fromTop - windowHeight/2) {
              $art3.addClass('activeart3');}}
              )

  
  
            

