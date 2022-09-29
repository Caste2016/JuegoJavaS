function dibujar(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var nave = new Image();

	nave.src='img/characters/player/ship2.png';
	nave.onload = function() {
		ctx.drawImage(nave, 300, 300)
	}

	const canvasA = [canvas];
	
	canvasA.forEach(element => {
		canvasA.strokeStyle = "black";
	});

	ctx.strokeRect(0,0,600,600);
/*
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(600, 600);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(600, 0);
	ctx.lineTo(0, 600);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, 90 * Math.PI)
	ctx.stroke();
	ctx.closePath();
*/
};