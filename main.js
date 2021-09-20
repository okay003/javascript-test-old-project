"use strict";
var map = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let gc;

let px = 1;
let py = 1;

let dx;
let dy;

const Keys = {
	w: 87,
	a: 65,
	s: 83,
	d: 68
}

const Canvas = {
	width: 680,
	height: 480
}

function init() {
	gc = document.getElementById("main").getContext("2d");
	onkeydown = getKeyDown;
	refresh();
}

function getKeyDown(e) {
	dx = px;
	dy = py;

	switch (e.keyCode) {
		case Keys.a:
			dx--;
			break;
		case Keys.w:
			dy--;
			break;
		case Keys.d:
			dx++;
			break;
		case Keys.s:
			dy++;
			break;

	}
	// wall check
	if ((map[dy][dx] & 0x1) == 0) {
		px = dx;
		py = dy;
	}
	refresh();
}

function refresh() {
	gc.fillStyle = "green";
	gc.fillRect(0, 0, Canvas.width, Canvas.height);

	for (var y = 0; y < map.length; y++) {
		for (var x = 0; x < map[y].length; x++) {
			if (map[y][x] == 1) {
				gc.drawImage(imgWall, x * 40, y * 40, 40, 40);
			}
		}
	}
	gc.drawImage(imgUser, px * 40, py * 40, 40, 40);
}