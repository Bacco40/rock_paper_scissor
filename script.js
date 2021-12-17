let playerScore=0;
let computerScore=0;
const results=document.querySelector('.Results');
const points=document.querySelector('#Points');
const humanPoints= document.createElement('div');
const computerPoints= document.createElement('div');
const output=document.createElement('div');
humanPoints.textContent = playerScore;
computerPoints.textContent = computerScore;
results.appendChild(output);
points.appendChild(humanPoints);
points.appendChild(computerPoints);
let playerSelection=""; 
function randomSelection(){
    let s="";
    let x= Math.floor(Math.random() * 3)+1;
    if(x==1){
        s="rock";
    }else if(x==2){
        s="paper";
    }else if(x==3){
        s="scissor";
    }
    return s;
}
function playRound(playerSelection,computerSelection){
    let Win="You Win! ";
    let Lose="You Lose! ";
    let Tie="It's a Tie! Both of you choosed ";
    if(playerSelection==computerSelection){
        Tie=Tie+playerSelection;
        return(Tie);
    }
    else if(playerSelection=="rock"&&computerSelection=="scissor"||playerSelection=="scissor"&&computerSelection=="paper"||playerSelection=="paper"&&computerSelection=="rock"){
        Win=Win+playerSelection+" beats "+computerSelection;
        playerScore=playerScore+1;
        humanPoints.textContent = playerScore;
        if(playerScore==5){
            playerScore=0;
            computerScore=0;
            computerPoints.textContent = computerScore;
            humanPoints.textContent = playerScore;
            alert("Congratulations you Won the game!")
        }
        return(Win);
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"||playerSelection=="scissor"&&computerSelection=="rock"||playerSelection=="paper"&&computerSelection=="scissor"){
        Lose=Lose+computerSelection+" beats "+playerSelection;
        computerScore=computerScore+1;
        computerPoints.textContent = computerScore;
        if(computerScore==5){
            playerScore=0;
            computerScore=0;
            computerPoints.textContent = computerScore;
            humanPoints.textContent = playerScore;
            alert("Machines Won!!! Humanity is doomed! AH LOSERRR!!")
        }
        return(Lose)
    }
}
let buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
    let playerSelection=button.id;
    let computerSelection= randomSelection();
    output.textContent=(playRound(playerSelection,computerSelection)); 
    })
})


