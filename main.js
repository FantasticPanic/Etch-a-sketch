let isPainting = false;
let color = 'black';

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
			square.style.border = '1px solid lightslategrey';
			square.style.backgroundColor = 'white';
			board.insertAdjacentElement('beforeend',square);
		}
	}


	function colorSquare(e){
		if(isPainting){
			this.style.backgroundColor = color;
			if(color === 'random'){
				this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
			}
		}

	}

	function changeSize(input){
		populatePage(input);
	}

	function changeColor(choice){
		color = choice;
	}

	function resetBoard()
	{
		let board = document.querySelector(".board");
		let squares = board.querySelectorAll("div");
		squares.forEach((div) => div.style.backgroundColor = 'white');
	}

	populatePage(16);


