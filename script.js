function game(playerScore,computerScore) {
    while(playerScore<5 && computerScore<5){
        let playerSelection= String(prompt("Rock, Paper or Scissor?"));

        function up(string){
            let first= string.slice(0,1);
            let rest= string.slice(1);
            first=first.toUpperCase();
            rest=rest.toLowerCase();
            let result=first+rest;
            playerSelection=result;
        }
        up(playerSelection);

        if(playerSelection!="Rock" && playerSelection!="Paper" && playerSelection!="Scissor"){
            alert("Are you stupid?");
        }
        else{

            function randomSel(){
                let s="";
                let x= Math.floor(Math.random() * 3)+1;
                if(x==1){
                    s="Rock";
                }else if(x==2){
                    s="Paper";
                }else if(x==3){
                    s="Scissor";
                }
                return s;
            }
            let computerSelection= randomSel();

            function playRound(playerSelection,computerSelection){
                let Win="You Win! ";
                let Lose="You Lose! ";
                let Tie="It's a Tie! Both of you choosed ";
                if(playerSelection==computerSelection){
                    Tie=Tie+playerSelection;
                    return(Tie);
                }
                else if(playerSelection=="Rock"&&computerSelection=="Scissor"||playerSelection=="Scissor"&&computerSelection=="Paper"||playerSelection=="Paper"&&computerSelection=="Rock"){
                    Win=Win+playerSelection+" beats "+computerSelection;
                    playerScore=playerScore+1;
                    return(Win);
                }
                else if(playerSelection=="Rock"&&computerSelection=="Paper"||playerSelection=="Scissor"&&computerSelection=="Rock"||playerSelection=="Paper"&&computerSelection=="Scissor"){
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
