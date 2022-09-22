
var i=0;    
var xDie=0;
var yDie=0;
/**-------------This function does the gambling-------------------**/
function rollDicePlay() {
  let betty = document.getElementById("bet").value;
  let cash = document.getElementById("cashPot").value;
  /**console.debug("betty" + betty);**/
  /**----------Check for suffient funds and that its not a 0 bet  **/
 if(cash-betty>-1 && !(betty<1))  {
  /** Random numers for the dice **/
  xDie=Math.floor(Math.random() * 6)+1;
  yDie=Math.floor(Math.random() * 6)+1;
  let win=0;
  /**  Calculate the winning or losing **/
  if (xDie===yDie) {
    win=betty*2;
  }    
  else if(xDie>yDie){
    win=betty;  
  }
  else if(yDie>xDie){
    win=0;
  }
  document.getElementById("cashPot").value= parseInt(cash)-parseInt(betty)+parseInt(win);    
  // Create an "li" node:
  const node = document.createElement("li");
  // Create a text node:
  i=i+1; /** round count, not impacting anything */
  const textnode = document.createTextNode(i+": you rolled: "+xDie+" and "+ yDie+ "you win: " + win );
  if (xDie===yDie) {
    node.style.backgroundColor = "#40FF40";
    }    
    else if(xDie>yDie){
      node.style.backgroundColor = "#FFAA44";
    }
    else{
      node.style.backgroundColor = "#FF8888";    
    }
  
    // Append the text node to the "li" node:
      node.appendChild(textnode);
    // Append the "li" node to the list:
    document.getElementById("myList").appendChild(node);   
  }
  else {
    if (betty<1) {
      alert("you must bet at least 1")
    }
    else {alert("you don't have any money!!! Game over, Go home!")}
  }
}


function setStart() {
  document.getElementById("gameName").innerHTML = "You clicked the button, I am new paragraph.";
 
}

function moveButton()
{
  for (let q = 0; q < 900; q++)
   {  
      document.getElementById("movable").style.left = `${q}px`;
   }
}   
  

