
const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

// Make the maze bigger.
// This makes it about half the browser window width.
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.8;

const rows = 10;
const cols = 12;

const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;

// Each wall is a line from one grid point to another.
// x1, y1 = start point
// x2, y2 = end point
const walls = [
  // outside border
  { x1: 0, y1: 0, x2: 12, y2: 0 },
  { x1: 0, y1: 10, x2: 12, y2: 10 },
  { x1: 0, y1: 0, x2: 0, y2: 10 },
  { x1: 12, y1: 0, x2: 12, y2: 10 },

  // inside maze walls
  { x1: 2, y1: 0, x2: 2, y2: 4 },
  { x1: 4, y1: 1, x2: 4, y2: 6 },
  { x1: 6, y1: 0, x2: 6, y2: 3 },
  { x1: 8, y1: 2, x2: 8, y2: 8 },
  { x1: 10, y1: 1, x2: 10, y2: 5 },

  { x1: 1, y1: 2, x2: 4, y2: 2 },
  { x1: 4, y1: 4, x2: 7, y2: 4 },
  { x1: 1, y1: 6, x2: 5, y2: 6 },
  { x1: 5, y1: 8, x2: 10, y2: 8 },
  { x1: 7, y1: 6, x2: 11, y2: 6 },
];

const player = {
  x: cellWidth * 1.5,
  y: cellHeight * 1.5,
  size: 18,
};

const goal = {
  x: cellWidth * 10.5,
  y: cellHeight * 8.5,
};

function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw walls as lines
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.lineCap = "square";

  for (let wall of walls) {
    ctx.beginPath();
    ctx.moveTo(wall.x1 * cellWidth, wall.y1 * cellHeight);
    ctx.lineTo(wall.x2 * cellWidth, wall.y2 * cellHeight);
    ctx.stroke();
  }

  // draw goal
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(goal.x, goal.y, 10, 0, Math.PI * 2);
  ctx.fill();

  // draw player
  ctx.fillStyle = "red";
  ctx.fillRect(
    player.x - player.size / 2,
    player.y - player.size / 2,
    player.size,
    player.size
  );
}

drawMaze();