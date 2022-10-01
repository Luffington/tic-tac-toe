var states = [" ", "X", "O"];
var empty = 0;
var X = 1;
var O = 2;

// FUNCTION TO CONVERT TO TILE
function getCurrentStateGivenCoordinates(stateOfTheGame, x, y) {
  tile = stateOfTheGame[x][y];
  return states[tile];
}
//FUNCTIONS TO RENDER/UPDATE THE BOARD
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

//FUNCTION TO BUILD THE ARRAY
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

//FUNCTION TO CHECK END CONDITION
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

// MOVE FUNCTION
// function iterativeMove(arr) {
//         for (var i = 0; i < arr.length; i++) {
//             for (var j = 0; j < arr[i].length; j++) {
//                 if (arr[i][j] == empty) {
//                     return [i, j]
//                 }
//             }
//         }
//     }

//NEW FUNCTION TO TAKE PLAYER INPUTS
function takePlayerMove(toggle) {
  var prompt = require("prompt-sync")({ sigint: true });
  if (toggle == 1) {
    var player1Move = prompt("Player 1 turn! Where would you like to move? - ");
    while(isNaN(player1Move) == true){player1Move = prompt("Invalid input! Please enter a number between 1 and 8 - ")}
    return Number(player1Move);


  }else {
    var player2Move = prompt("Player 2 turn! Where would you like to move?");
    while(isNaN(player2Move) == true){player2Move = prompt("Invalid input! Please enter a number between 1 and 8 - ")}
    return Number(player2Move);
  }
}

// TURN PLAYER INPUT INTO COORDINATES

function getCoordinatesUsingMath(matrix, playerMove) {
  var n = matrix.length;
  var m = matrix[0].length;
  // double check n's and m's here
  var x = Math.floor(playerMove / matrix.length);
  var y = Math.floor(playerMove % matrix.length);
  if (playerMove > n * m - 1 || playerMove < 0) {
    return -1;
  } else {
    return [x, y];
  }
}

//INTEGRATE BOTH FUNCTIONS
function integratedCoordinateFunction(matrix, toggle) {
  var playerMove = takePlayerMove(toggle);
  var coordinates = getCoordinatesUsingMath(matrix, playerMove);
  // console.log(coordinates);
  return coordinates;
}


// CHECK WIN CONDITION
var stateOfTheGame = [[2, 0, 0], [0, 2, 0], [0, 2, 2]]

function checkWinCondition(stateOfTheGame){
  var i = 0
  var inside1 = stateOfTheGame[i]
  var inside2 = stateOfTheGame[i + 1]
  var inside3 = stateOfTheGame[i + 2]
  
  // for (var i = 0; i <= stateOfTheGame.length; i++){
    //inside.includes(1, 0) 
  // }
        
        if (inside1[0] == 1 && inside1[1] == 1 && inside1[2] == 1){
          console.log("X wins horizontally! (Row 1)")}
          else{
            if (inside2[0] == 1 && inside2[1] == 1 && inside2[2] == 1){
              console.log("X wins horizontally! (Row 2)")}
              else{
                if (inside3[0] == 1 && inside3[1] == 1 && inside3[2] == 1){
                  console.log("X wins horizontally! (Row 3)")}
                  else{
                    if (inside1[0] == 1 && inside2[0] == 1 && inside3[0] == 1 ){
                      console.log("X wins vertically! (Column 1)")}
                      else{
                        if (inside1[1] == 1 && inside2[1] == 1 && inside3[1] == 1){
                          console.log("X wins vertically! (Column 2)")}
                          else{
                            if (inside1[2] == 1 && inside2[2] == 1 && inside3[2] == 1){
                              console.log("X wins vertically! (Column 3)")}
                              else{
                                if (inside1[0] == 1 && inside2[1] == 1 && inside3[2] == 1){
                                  console.log("X wins diagonally! (Left to right)")}
                                else{
                                  if (inside1[2] == 1 && inside2[1] == 1 && inside3[0] == 1){
                                    console.log("X wins diagonally! (Right to left)")}
                                    //TRANSITION FROM X'S TO O'S
                                    else{
                                    if (inside1[0] == 2 && inside1[1] == 2 && inside1[2] == 2){
                                      console.log("O wins horizontally! (Row 1)")}
                                      else{
                                        if (inside2[0] == 2 && inside2[1] == 2 && inside2[2] == 2){
                                          console.log("O wins horizontally! (Row 2)")}
                                          else{
                                            if (inside3[0] == 2 && inside3[1] == 2 && inside3[2] == 2){
                                              console.log("O wins horizontally! (Row 3)")}
                                              else{
                                                if (inside1[0] == 2 && inside2[0] == 2 && inside3[0] == 2){
                                                  console.log("O wins vertically! (Column 1)")}
                                                  else{
                                                    if (inside1[1] == 2 && inside2[1] == 2 && inside3[1] == 2){
                                                      console.log("O wins vertically! (Column 2)")}
                                                      else{
                                                        if (inside1[2] == 2 && inside2[2] == 2 && inside3[2] == 2){
                                                          console.log("O wins vertically! (Column 3)")}
                                                          else{
                                                            if (inside1[0] == 2 && inside2[1] == 2 && inside3[2] == 2){
                                                              console.log("O wins diagonally! (Left to right)")}
                                                            else{
                                                              if (inside1[2] == 2 && inside2[1] == 2 && inside3[0] == 2){
                                                                console.log("O wins diagonally! (Right to left)")}
                                                            
                                
  else{console.log("No win condition! Continue playing!")}
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                              }
                            }
                          }
                      }
                }
          }
      }
      
    
// what are the conditions where the game is won?
// [0,0 - 0,1 - 0,2]
// [1,0 - 1,1 - 1,2]
// [2,0 - 2,1 - 2,2]

// [0,0 - 1,0 - 2,0]
// [0,1 - 1,1 - 2,1]
// [0,2 - 1,2 - 2,2]

// [0,0 - 1,1 - 2,2]
// [0,2 - 1,1 - 2,0]
}


checkWinCondition(stateOfTheGame)


//MAIN FUNCTION TO GENERATE GAME

function main(num) {
  var stateOfTheGame = createGame(num);
  var toggle = 1;

  // hw: optimize to remove redundant work
  while (returnTrueIfEmptySpotsInGame(stateOfTheGame) != false) {
    // coordinates = [[0, 0], 1]
    var coordinates = integratedCoordinateFunction(stateOfTheGame, toggle);

    var i = coordinates[0];
    var j = coordinates[1];
    // console.log(i, j);
    getCurrentStateGivenCoordinates(stateOfTheGame, i, j);
    stateOfTheGame[i][j] = toggle;
    if (toggle == 1) {
      toggle = 2;
    } else {
      toggle = 1;
    }
    renderBoard(num, stateOfTheGame);
  }
}

// main(3);
