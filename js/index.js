// Your code goes here

//required item for several event listeners to work
const container = document.querySelector('body');

//hover color change and unchange
let navItems = document.querySelector('.nav');
navItems.addEventListener('mouseover',function(event){
  event.target.style.color = 'green';
});

navItems.addEventListener('mouseout',function(event){
  event.target.style.color = 'black';
});

//keydown image swap and keyup restore
let img1 = document.querySelector('.content-section img');
let img2 = document.querySelector('.inverse-content img');

container.addEventListener('keydown',function(){
  img1.src = 'img/fun.jpg';
  img2.src = 'img/adventure.jpg'; 
});

container.addEventListener('keyup',function(){
  img2.src = 'img/fun.jpg';
  img1.src = 'img/adventure.jpg';
});


//wheel h1 text color change 
const logo = document.querySelector('.logo-heading');

container.addEventListener('wheel',function(){
  let hexColorCode = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
  logo.style.color = hexColorCode;
})