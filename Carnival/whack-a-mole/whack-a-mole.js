  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var cells = document.getElementsByTagName("TD")

var random = Math.floor(Math.random() * cells.length)

var cell = cells[random]

var mole = document.createElement('img')

mole.src = "./mole.PNG"
mole.id = "mole"

cell.appendChild(mole)

function whackedMole(){
	cell.removeChild(mole)

	random = Math.floor(Math.random() * cells.length)

	cell = cells[random]

	cell.appendChild(mole)
    
	var audio = new Audio("whack-audio.wav");
audio.play();

}


mole.onclick = whackedMole





