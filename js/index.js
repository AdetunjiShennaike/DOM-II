// Your code goes here

//required item for several event listeners to work
const container = document.querySelector('body');
container.addEventListener('click',function(){
  console.log('Yay! You found the hidden spot!');
});

//hover color change and un-change navbar
const navItems = document.querySelector('.nav');
navItems.addEventListener('mouseover',function(event){
  event.target.style.color = 'green';
});

navItems.addEventListener('mouseout',function(event){
  event.target.style.color = 'black';
});

//prevent default for navbar and stop propagation
navItems.addEventListener('click', function(event){
  console.log(`${event} has been clicked!`);
  event.preventDefault();
  event.stopPropagation();
})

//keydown image swap and keyup restore
const img1 = document.querySelector('.content-section img');
const img2 = document.querySelector('.inverse-content img');

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
});

//drag and dragend an item making the page change while you hold making it look like the navbar changes the appearance of the site.
const boat = document.querySelector('.content-destination img');
const text = document.querySelector('.home');

boat.addEventListener('drag', function(){
  TweenMax.to('.main-navigation', .3, {y:800});
  text.style.color = 'blue';
})

boat.addEventListener('dragend',function(){
  TweenMax.to('.main-navigation', .1, {y:0});
  text.style.color = 'black';
})

//load creates an animation with GSAP
const navBar = document.querySelector('.main-navigation')
window.addEventListener('load', function(){
  TweenMax.to('.img', 4, {rotation:720});
  navBar.setAttribute('z-index: 1000');
})

//copy and cut notifier
text.addEventListener('copy', function(){
  window.alert("Stop stealing from me!!");
})

text.addEventListener('cut', function(){
  window.alert("Stop stealing from me!!");
})

//select raises suspicion 
text.addEventListener('dblclick', function(){
  console.log('Hey! Boss I think we need to watch this guy, he looks suspicious.');
})