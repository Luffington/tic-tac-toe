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

// get the next set of coordinates you want to change
function iterativeMove(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == empty) {
                return [i, j]
            }
        }
    }
}

function main(num) {
    var stateOfTheGame = createGame(num);
    var toggle = 1;
    // hw: optimize to remove redundant work
    while (returnTrueIfEmptySpotsInGame(stateOfTheGame) != false) {
        var coordinates = iterativeMove(stateOfTheGame)
        var i = coordinates[0]
        var j = coordinates[1]
        stateOfTheGame[i][j] = toggle
        if (toggle == 1) {
            toggle = 2
        } else {
            toggle = 1
        }
        renderBoard(num, stateOfTheGame)
    }
}

main(3)
