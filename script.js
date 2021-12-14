playerSelection= String(prompt("Rock,Paper or Scissor?"));

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
    alert("that's a good start!");
}