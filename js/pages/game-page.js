var player = $("#hermes-coin");
var canvas = $("#labyrinth-canvas")[0];
var ctx = canvas.getContext("2d");

$(function () {
  animationHandle();
  gameHandle();
  makeLabyrinth();
});

function animationHandle() {
  console.log("animation");
}

function gameHandle() {
  var totalTime = 24;
  $("#timer").html(totalTime);
  var currentTime = totalTime;

  var countDownTime = setInterval(function () {
    currentTime--;
    $("#timer").html(currentTime);
    let remainTime = totalTime - currentTime;

    $(".circular-bar").css(
      "background",
      `conic-gradient(#ffffff ${(remainTime / 24) * 360}deg, #e28b22 0deg)`
    );

    if (currentTime <= 0) {
      // $(".result").fadeIn(animationDuration);
      // $(".time-up").fadeIn(animationDuration);

      let playAgainBtn = $(".playagain-btn");
      setTimeout(() => {
        playAgainBtn.pulse();
        playAgainBtn.one("click", () => {
          _goto("game-page");
        });
      }, 3000);
      clearInterval(countDownTime);
    }
  }, 1000);
}

function makeLabyrinth() {
  drawLabyrinth();
  requestAnimationFrame(gameLoop);
}

function drawLabyrinth() {
  // Clear the canvas
  $(canvas).clearCanvas();

  // Load the image onto the canvas
  $(canvas).drawImage({
    source: "assets/images/pages/game-page/labyrinth.png",
    x: 0,
    y: 0,
    fromCenter: false,
    width: canvas.width,
    height: canvas.height,
    load: function () {
      console.log("Image loaded successfully");
      defineWallsAndPathsCoor(ctx, canvas, "#ffffff");
      drawPlayer(ctx);
    },
  });
}

var coordinates = {
  walls: [],
  paths: [],
};

function defineWallsAndPathsCoor(ctx, canvas, color) {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;

  for (var i = 0; i < pixels.length; i += 4) {
    var red = pixels[i];
    var green = pixels[i + 1];
    var blue = pixels[i + 2];

    // Convert RGB color components to hexadecimal
    var hexColor = rgbToHex(red, green, blue);
    if (hexColor !== color) {
      // Calculate the coordinates of the pixel
      var x = (i / 4) % canvas.width;
      var y = Math.floor(i / 4 / canvas.width);

      coordinates.walls.push({ x: x, y: y });
      // Draw wall at the coordinates
      // drawWall(x, y);
    } else {
      var x = (i / 4) % canvas.width;
      var y = Math.floor(i / 4 / canvas.width);

      coordinates.paths.push({ x: x, y: y });
      // drawPath(x, y);
    }
  }
}

// Define player properties
var player = {
  x: 80,
  y: 110,
  width: 60,
  height: 68,
};

function drawPlayer(ctx) {
  var playerImage = new Image();
  playerImage.src = "assets/images/general/hermes-logo.png";

  ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function drawWall(x, y) {
  ctx.fillStyle = "orange";
  ctx.fillRect(x, y, 1, 1);
}

function drawPath(x, y) {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 1, 1);
}

function isWall(x, y, width, height) {
  var overlap = 5;

  // Iterate through each wall coordinate
  for (var i = 0; i < coordinates.walls.length; i++) {
    var wall = coordinates.walls[i];
    if (
      x + width - overlap > wall.x &&
      x + overlap < wall.x + 1 &&
      y + height - overlap > wall.y &&
      y + overlap < wall.y + 1
    ) {
      return true;
    }
  }
  return false;
}

function movePlayer(dx, dy) {
  var newX = player.x + dx;
  var newY = player.y + dy;

  if (
    newX >= 0 &&
    newX + player.width <= canvas.width &&
    newY >= 0 &&
    newY + player.height <= canvas.height
  ) {
    if (!isWall(newX, newY, player.width, player.height)) {
      console.log("coordinate", newX, newY);
      player.x = newX;
      player.y = newY;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLabyrinth();
      drawPlayer(ctx);

      console.log("Player moved successfully");
    }
  }
}

var keys = { 37: false, 38: false, 39: false, 40: false };
$(document).keydown(function (e) {
  if (keys[e.which] !== undefined) {
    console.log("ok");
    keys[e.which] = true;
  }
});

$(document).keyup(function (e) {
  if (keys[e.which] !== undefined) {
    keys[e.which] = false;
  }
});

function gameLoop() {
  if (keys[37]) movePlayer(-10, 0); // Smaller increment for smoother movement
  if (keys[38]) movePlayer(0, -10);
  if (keys[39]) movePlayer(10, 0);
  if (keys[40]) movePlayer(0, 10);

  requestAnimationFrame(gameLoop);
}

// 1. movement logic
// 2. collision detection
// 3. win and lose game
// 4. swiper animation
// 5. path color
