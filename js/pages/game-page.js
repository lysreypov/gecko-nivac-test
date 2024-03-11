var canvas = $("#labyrinth-canvas")[0];
var ctx = canvas.getContext("2d");

var playerImage, goalImage;
var coordinates = {
  walls: [],
  paths: [],
};
var playerPath = [];
var wallsAndPathsDefined = false;

$(function () {
  gameHandle();
  loadImages();
  makeLabyrinth();
});

function loadImages() {
  playerImage = new Image();
  playerImage.src = "assets/images/pages/game-page/player.png";

  goalImage = new Image();
  goalImage.src = "assets/images/pages/game-page/keys.png";
}

function gameHandle() {
  // Timer
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

    if (currentTime > 0) {
      if (checkWin()) {
        clearInterval(countDownTime);
        disableEvent();

        $(".result").fadeIn(animationDuration);
        $(".arrived").fadeIn(animationDuration);
        $("#labyrinth-canvas").css("cursor", "default");

        let discoverBtn = $(".discover-btn");

        setTimeout(() => {
          discoverBtn.pulse();
          discoverBtn.one("click", () => {
            _goto("pdf-download-page");
            $(".result").fadeOut(animationDuration);
            $(".arrived").fadeOut(animationDuration);
          });
        }, 3000);
      }
    } else {
      clearInterval(countDownTime);
      disableEvent();

      $(".result").fadeIn(animationDuration);
      $(".time-up").fadeIn(animationDuration);
      $("#labyrinth-canvas").css("cursor", "default");

      let playAgainBtn = $(".playagain-btn");
      setTimeout(() => {
        playAgainBtn.pulse();
        playAgainBtn.one("click", () => {
          _goto("game-page");
          $(".result").fadeOut(animationDuration);
          $(".time-up").fadeOut(animationDuration);
        });
      }, 3000);
    }
  }, 1000);

  swiperEventHandle();
  keyEventHandle();
}

function swiperEventHandle() {
  // Swipe player
  if ($.fn.swipe) {
    $("#labyrinth-board").swipe({
      swipeStatus: function (
        event,
        phase,
        direction,
        distance,
        duration,
        fingers
      ) {
        if (phase === "move") {
          // Determine the movement direction
          switch (direction) {
            case "up":
              movePlayer(38);
              break;
            case "down":
              movePlayer(40);
              break;
            case "left":
              movePlayer(37);
              break;
            case "right":
              movePlayer(39);
              break;
          }
        }
      },
      threshold: 0,
    });
  }
}

function keyEventHandle() {
  // key arrow event
  $(document).on("keydown", function (e) {
    e.preventDefault();
    switch (e.which) {
      case 37:
        movePlayer(e.which);
        break;
      case 38:
        movePlayer(e.which);
        break;
      case 39:
        movePlayer(e.which);
        break;
      case 40:
        movePlayer(e.which);
        break;
      default:
        break;
    }
  });
}

function disableEvent() {
  offKey();
  offSwipe($("#labyrinth-board"));
}

function makeLabyrinth() {
  drawLabyrinth();
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
      defineWallsAndPathsCoor(ctx, canvas, "#ffffff");
      drawGoal(ctx);
      drawPlayer(ctx);
    },
  });
}

function defineWallsAndPathsCoor(ctx, canvas, color) {
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pixels = imageData.data;
  if (!wallsAndPathsDefined) {
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
      } else {
        var x = (i / 4) % canvas.width;
        var y = Math.floor(i / 4 / canvas.width);

        coordinates.paths.push({ x: x, y: y });
      }
    }
    wallsAndPathsDefined = true;
  }
}

// Define player and goal properties
var player = {
  x: 80,
  y: 110,
  width: 58,
  height: 62,
  speed: 10,
};

var goal = {
  x: 780,
  y: 170,
  width: 120,
  height: 190,
};

function drawPlayer(ctx) {
  if (playerImage.complete) {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
  } else {
    console.log("Player image is still loading...");
  }
}

// Draw the goal on the canvas
function drawGoal(ctx) {
  if (goalImage.complete) {
    ctx.drawImage(goalImage, goal.x, goal.y, goal.width, goal.height);
  } else {
    console.log("Goal image is still loading...");
  }
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

function checkWin() {
  if (
    player.x < goal.x + goal.width &&
    player.x + player.width > goal.x &&
    player.y < goal.y + goal.height &&
    player.y + player.height > goal.y
  ) {
    return true;
  } else {
    return false;
  }
}

function removePlayer(ctx) {
  ctx.clearRect(player.x, player.y, player.width, player.height);
}

function movePlayer(key) {
  // Calculate the new position based on the keys pressed
  var newX = player.x;
  var newY = player.y;

  // Store the current position before updating
  var currentPosition = {
    x: player.x + player.width / 2,
    y: player.y + player.height / 2,
  };
  playerPath.push(currentPosition);

  if (key === 37) {
    newX -= player.speed;
  }
  if (key === 38) {
    newY -= player.speed;
  }
  if (key === 39) {
    newX += player.speed;
  }
  if (key === 40) {
    newY += player.speed;
  }

  // Check for collisions with walls
  if (!isWall(newX, newY, player.width, player.height)) {
    removePlayer(ctx);

    player.x = newX;
    player.y = newY;

    drawLabyrinth();
    drawPlayerPath(ctx);
    drawPlayer(ctx);
  }
}

function drawPlayerPath(ctx) {
  ctx.strokeStyle = "#e28b22";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for (var i = 1; i < playerPath.length; i++) {
    ctx.moveTo(playerPath[i - 1].x, playerPath[i - 1].y);
    ctx.lineTo(playerPath[i].x, playerPath[i].y);
  }

  ctx.stroke();
}
