//grab things that are needed for game
const blocks = document.querySelectorAll('.block');
const blockGroup = document.querySelector('.blocks');
// console.log(blocks);
console.log(blockGroup);
blocks.forEach(function(block,i){
  block.addEventListener('click',function(e){
    // e.target.style.order = 0;
    //doesn't work after initial click
    blocks.forEach(function(item){
      item.style.order = 0;
    });
    e.target.style.order -= 1;
  });
})

