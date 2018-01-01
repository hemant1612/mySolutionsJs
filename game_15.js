//1
function runGame(plans, Display) {
  var lives = 3;

  function startLevel(n) {
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost" && lives == 0) {
        startLevel(0);
      } else if (status == "lost" && lives > 0) {
        startLevel(n);
        lives--;
      } else if (n < plans.length - 1)
        startLevel(n + 1);
      else
        console.log("You win!");
    });
  }
  startLevel(0);
}
runGame(GAME_LEVELS, DOMDisplay);



//2

function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);
  var run = true;

  function handleKey(event) {
    if (event.keyCode == 27) {
      run = !run;
      if (run) {
        runAnimation(animation);
      } else {
        return false;
      }
    }
  }
  addEventListener("keydown", handleKey);
  var arrows = trackKeys(arrowCodes);

  function animation(step) {
    if (!run) {
      return false;
    }

    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      // Here we remove all our event handlers
      removeEventListener("keydown", handleKey);
      if (andThen)
        andThen(level.status);
      return false;
    }
  }
  runAnimation(animation);
}