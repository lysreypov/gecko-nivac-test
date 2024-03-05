var canvas = $("#labyrinth-canvas")[0];
var ctx = canvas.getContext("2d");

var playerImage, goalImage;
var countDownTime;
var animationRequestId;
var lastMoveTime = 0;

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
  var totalTime = 24;
  $("#timer").html(totalTime);
  var currentTime = totalTime;

  countDownTime = setInterval(function () {
    currentTime--;
    $("#timer").html(currentTime);
    let remainTime = totalTime - currentTime;

    $(".circular-bar").css(
      "background",
      `conic-gradient(#ffffff ${(remainTime / 24) * 360}deg, #e28b22 0deg)`
    );

    if (currentTime <= 0) {
      clearInterval(countDownTime);
      offKey($(this));
      offSwipe($("#labyrinth-board"));

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
          cancelAnimationFrame(animationRequestId);

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
        // Check if swipe is completed
        // else if (phase === "end") {
        //   cancelAnimationFrame(animationRequestId);
        // }
      },
      threshold: 0,
    });
  }

  // key arrow event
  $(this).on("keydown", function (e) {
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

var coordinates = {
  walls: [],
  paths: [],
};
var wallsAndPathsDefined = false;

function defineWallsAndPathsCoor(ctx, canvas, color) {
  if (!wallsAndPathsDefined) {
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
  speed: 15,
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
    drawPlayer(ctx);

    if (checkWin()) {
      clearInterval(countDownTime);
      offKey($(this));
      offSwipe($("#labyrinth-board"));

      $(".result").fadeIn(animationDuration);
      $(".arrived").fadeIn(animationDuration);
      $("#labyrinth-canvas").css("cursor", "default");

      let discoverBtn = $(".discover-btn");

      setTimeout(() => {
        discoverBtn.pulse();
        discoverBtn.one("click", () => {
          _goto("login-page");
          $(".result").fadeOut(animationDuration);
          $(".arrived").fadeOut(animationDuration);
        });
      }, 3000);
    }
  }
}

// function moveContinuous(key) {
//   cancelAnimationFrame(animationRequestId);

//   var currentTime = Date.now();
//   var timeElapsed = currentTime - lastMoveTime;
//   var movementDelay = 50; //milliseconds

//   if (timeElapsed >= movementDelay) {
//     lastMoveTime = currentTime;
//     movePlayer(key);
//   }

//   animationRequestId = requestAnimationFrame(function () {
//     moveContinuous(key);
//   });
// }
