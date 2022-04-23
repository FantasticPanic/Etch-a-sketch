let isPainting = false;
document.body.onmousedown = (e) => {
	e.preventDefault();
	isPainting = true};

document.body.onmouseup = () => (isPainting = false );

function populatePage(size){
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount= size * size;
for(var i = 0; i < amount; i++){
	let square = document.createElement('div')
	square.addEventListener('mouseover',colorSquare);
	square.addEventListener('mousedown',colorSquare);
	square.style.backgroundColor = 'green';
	board.insertAdjacentElement('beforeend',square);
   }
}


function colorSquare(e){
	if(isPainting){
		this.style.backgroundColor = 'black';
	}
}

function changeSize(input){
populatePage(input);
}

populatePage(16);


