const p1 = {
   score: 0,
   button:  document.querySelector("#p1button"),
   display: document.querySelector('#p1')
}
const p2 = {
   score: 0,
   button:  document.querySelector("#p2button"),
   display: document.querySelector('#p2')
}
 function updateScores(player, opponent) {
   if(!isgameover)
  {
     player +=1;
     if(player.score === winningscore) {
     isgameover = true;
     player.classList.add('has-text-success');
     opponent.classList.add('has-text-danger');
     player.button.disabled = true;
     opponent.button.disabled = true;
  }
     player.display.textContent = player.score;

  }
 }

const resetbutton = document.querySelector('#resetbutton');  
const maxscore = document.querySelector('#maxscore');
let winningscore = 3;
let isgameover = false;

p1.button.addEventListener('click', function(){
  updateScores(p1,p2);
  
})
 
p2.button.addEventListener('click', function(){
updateScores(p2, p1); 
})

  maxscore.addEventListener('change', function(){
    winningscore=parseInt(this.value);
    reset();
  })
  
  function reset(){
 isgameover = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
p1.button.disabled = false;
     p2.button.disabled = false;
  }
   resetbutton.addEventListener('click', reset);
 
   
