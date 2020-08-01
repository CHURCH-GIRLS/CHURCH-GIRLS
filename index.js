var cells = document.getElementsByTagName("td")

for (var i = 0; i < cells.length; i++) {
	var cell = cells[i]

	cell.onclick = cellClick
}

function cellClick (e) {
	var cell = e.target

	if (cell.classList.contains("selected")) {
		cell.classList.remove("selected");
	} else {
		cell.classList.add("selected")
	}
}

var speed = 80

window.setInterval(function(){
  advanceStep()
}, speed);

var index = 0;

function advanceStep () {
	cells[index].classList.remove("executing")
	index++ 

	if (index >= 16) {
		index = 0;
	}

	if (cells[index].classList.contains("selected")) {
		var audio = new Audio('./kick.wav');
		audio.play();
	}

	cells[index].classList.add("executing")
}
