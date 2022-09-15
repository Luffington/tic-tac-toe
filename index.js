var states = [" ", "X", "O"];
var empty = 0;
var X = 1;
var O = 2;

function getCurrentStateGivenCoordinates(stateOfTheGame, x, y) {
  tile = stateOfTheGame[x][y];
  return states[tile];
}

function renderBoard(num, stateOfTheGame) {
  var n = num - 1;
  var board = "";

  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= n; j++) {
      board = board + getCurrentStateGivenCoordinates(stateOfTheGame, i, j);
      if (j < n) board += "|";
      else board += "\n";
    }

    if (i < n) {
      for (var k = 0; k < n + 1; k++) {
        board += "_ ";
      }
      board += "\n";
    }
  }

  console.log(board);
}

function createGame(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var inside_arr = [];
    for (var j = 0; j < num; j++) {
      inside_arr.push(0);
    }
    arr.push(inside_arr);
  }
  return arr;
}

// arr = [[0, 1, 2], [0, 0, 0], [1, 2, 2]]
function returnTrueIfEmptySpotsInGame(stateOfTheGame) {
  for (var i = 0; i < stateOfTheGame.length; i++) {
    var arr = stateOfTheGame[i];
    for (var j = 0; j < arr.length; j++) {
      tile = arr[j];
      if (tile == 0) return true;
    }
  }

  return false;
}
///this is my first code for random moves
function randomMove(arr) {
  var randomSelectOuter = Math.floor(Math.random() * arr.length);
  var randomSelectInner = Math.floor(
    Math.random() * arr[randomSelectOuter].length
  );
  while (arr[randomSelectOuter][randomSelectInner] != 0) {
    randomSelectOuter = Math.floor(Math.random() * arr.length);
    randomSelectInner = Math.floor(
      Math.random() * arr[randomSelectOuter].length
    );
  }
  return [randomSelectOuter, randomSelectInner];
}

// there is a bug in the main function... at the moment this will try to simulate a game but the i, j, counter logic is busted
// you will probably have to reimplement the simulation logic
function buggyMain(num) {
  var stateOfTheGame = createGame(num);
  var counter = 1;
  while (returnTrueIfEmptySpotsInGame(stateOfTheGame) != false) {
    var mark = randomMove(stateOfTheGame);
    var i = mark[0];
    var j = mark[1];
    stateOfTheGame[i][j] = counter;
    if (counter == 1) {
      counter = 2;
    } else if (counter == 2) {
      counter = 1;
    }
    renderBoard(num, stateOfTheGame);
  }
}
buggyMain(3);



