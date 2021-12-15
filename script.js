function game(playerScore,computerScore) {
    while(playerScore<5 && computerScore<5){
        let playerSelection= String(prompt("Rock, Paper or Scissor?")).toLowerCase();
        if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissor"){
            alert("Are you stupid?");
        }
        else{

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
            let computerSelection= randomSelection();

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
                    return(Win);
                }
                else if(playerSelection=="rock"&&computerSelection=="paper"||playerSelection=="scissor"&&computerSelection=="rock"||playerSelection=="paper"&&computerSelection=="scissor"){
                    Lose=Lose+computerSelection+" beats "+playerSelection;
                    computerScore=computerScore+1;
                    return(Lose)
                }
            }

            console.log(playRound(playerSelection,computerSelection));
            console.log("the score is "+playerScore+"-"+computerScore);
        }
    }
    if(playerScore>computerScore){
        return("You won the game! Congratulations!");
    }else{
        return("Unortunately you lost the game! Computer are better than human");
    }
}

let playerScore=0;
let computerScore=0;
alert(game(playerScore,computerScore));
