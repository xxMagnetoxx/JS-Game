const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#time-left');

let score = document.querySelector('.score');
let currenttime = timeleft.textContent;
let result = 0;
let match = false;
function randomsquare(){
    square.forEach(classname => {
classname.classList.remove('mole');
    });
    let randomposition = square[Math.floor(Math.random() * 9)];
    randomposition.classList.add('mole');
    match = false;
    // assign the id of the random position to the hit position for us to use later
hitposition = randomposition.id;

}
    square.forEach(id =>{
id.addEventListener('mouseup' , ()=>{
    if(id.id === hitposition)
    {
        if(match == false)
        result++;
        match = true
        score.textContent = result;   
    }

});
    });
    
    function molemove(){
        let timeid = null; 
        timeid = setInterval(randomsquare , 1000);
    }
    
    molemove();
    function countDown(){
        currenttime--;
    timeleft.textContent = currenttime;
    if(currenttime === 0){
        
        clearInterval(timerid);
        alert('GAME OVER!' , result);
    }
}
let timerid = setInterval(countDown , 1000);
