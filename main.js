
// -------------------------------------------------------------------------
// Create Players
// -------------------------------------------------------------------------

var playerCount = 0;

function enterPlayer(event){
  event.preventDefault();
  if(!((document.getElementById("enterPlayerName").value === "")
    && (document.getElementById("enterCash").value === ""))) {
    playerCount = ++playerCount;

    // create a new div element
    const newPlayerDiv = document.createElement('div');
    newPlayerDiv.setAttribute('id','player'+playerCount);
    //console.debug(newPlayerDiv.id);

    const newPlayerNumber = document.createElement('h1');
    newPlayerNumber.innerHTML = playerCount;
   
    const newPlayerName = document.createElement('h2');
    newPlayerName.innerHTML = document.getElementById("enterPlayerName").value;
    document.getElementById("enterPlayerName").value=null;
 
    const newPlayerCash = document.createElement('h2');
    newPlayerCash.setAttribute('id','player'+playerCount+'Cash');
    newPlayerCash.innerHTML = document.getElementById("enterCash").value;
    document.getElementById("enterCash").value=null;

    newPlayerDiv.appendChild(newPlayerNumber); 
    newPlayerDiv.appendChild(newPlayerName); 
    newPlayerDiv.appendChild(newPlayerCash); 
   
    // Assign class to new Div
    newPlayerDiv.classList.add('playerDiv');
    // set color--- these are hard coded values, and I' aware thats not great, lazy solution.  
    if(playerCount==1){
      newPlayerDiv.style.backgroundColor = "#FF4040";
    }
    if(playerCount==2){
      newPlayerDiv.style.backgroundColor = "#4040FF";
    }
    if(playerCount==3){
      newPlayerDiv.style.backgroundColor = "#40FF40";
    }
    if(playerCount==4){
      newPlayerDiv.style.backgroundColor = "#888";
    }
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("createPlayersDiv");
    currentDiv.appendChild(newPlayerDiv); 

    let regStatus=document.getElementById("regStatus").innerHTML="";
  }
  else{
    document.getElementById("regStatus").innerHTML="Please enter name and cash";
  }
}

// -------------------------------------------------------------------------
// Play a turn in The Dice Game
// -------------------------------------------------------------------------

var playerTurn = 1;

function rollDicePlay() {
  let regStatus=document.getElementById("regStatus");
  let currentPlayer = document.getElementById("player"+playerTurn);
  let currentPlayerCash = document.getElementById("player"+playerTurn+'Cash');
  let playerBet = parseInt(document.getElementById("turnBet").value);

  if (currentPlayer !== null){
    regStatus.innerHTML="";
    if (currentPlayerCash !== null){
      if(!(playerBet === NaN)){
        //console.debug("currentPlayerCash.innerHTML: "+currentPlayerCash.innerHTML);
        //console.debug("playerBet: "+playerBet);
      
        if(currentPlayerCash.innerHTML>0 
        && (currentPlayerCash.innerHTML>=playerBet) ){
          // play dice  
          currentPlayerCash.innerHTML = currentPlayerCash.innerHTML - playerBet;
          //console.debug("currentPlayerCash.innerHTML - bet: "+currentPlayerCash.innerHTML);    
          rollDice();     
        }
        else if(currentPlayerCash.innerHTML==0 ){
            regStatus.innerHTML="You have no more money! Game Over";
        }        
        else if(playerBet>currentPlayerCash.innerHTML){
          regStatus.innerHTML="You can't bet that high, try a lower number!";
        }

      }
      else{
        console.debug("!== NaN -> "+playerBet);
        regStatus.innerHTML="Please place a valid bet, larger than 0!";
      }  
    }
  }
  else{
      regStatus.innerHTML="Please create at least one player to play";
  }
}


// -------------------------------------------------------------------------
// Roll Dice and retur win factor 2, 1 or 0.
// -------------------------------------------------------------------------



function rollDice(){
  let win=0;
  let xDie=0;
  let yDie=0;

  /** Random numers for the dice **/
  xDie=Math.floor(Math.random() * 6)+1;
  yDie=Math.floor(Math.random() * 6)+1;

  if (xDie===yDie) {
    win=2;
  }    
  else if(xDie>yDie){
    win=1;  
  }
  else if(xDie<yDie){
    win=0;
  }

  writeResult(xDie, yDie, win);

  //return win;
}

// -------------------------------------------------------------------------
// Play a turn in The Dice Game
// -------------------------------------------------------------------------


var turnCount=0;    

function writeResult(xDie, yDie, win){

  let currentPlayerCash = document.getElementById("player"+playerTurn+'Cash');
  let playerBet = parseInt(document.getElementById("turnBet").value);

  turnCount = ++turnCount;
  // Create an "li" node:
  const node = document.createElement("li");
  // Create a text node:
  const textnode = document.createTextNode("turn: "+turnCount+"; you rolled: "+xDie+" and "+ yDie+ " you win: bet *" + win );
    if(win===0){
      node.style.backgroundColor = "#FF8888";   
      
    }   
    if(win===1){
      node.style.backgroundColor = "#FF8800";
      currentPlayerCash.innerHTML = parseInt(currentPlayerCash.innerHTML) + playerBet;
    }    
    if(win===2){
      node.style.backgroundColor = "#00FF00";
      currentPlayerCash.innerHTML = parseInt(currentPlayerCash.innerHTML) + (playerBet*2);
    }   

 
  
  
    // Append the text node to the "li" node:
  node.appendChild(textnode);
  // Append the "li" node to the list:
  document.getElementById("turnResults").appendChild(node);   
}


// -------------------------------------------------------------------------
// Bonus function, move element with timeout until 500 pixels left.
// -------------------------------------------------------------------------
function moveDiv(divID) {
  if(parseInt(document.getElementById(divID).style.left) < 500 ){
   document.getElementById(divID).style.left = (parseInt(document.getElementById(divID).style.left)+1)+"px";
	if (parseInt(document.getElementById(divID).style.left) > 1) setTimeout("moveDiv('"+divID+"')", 10);
 }
}
	


