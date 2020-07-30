var board = [0, 0, 0,
  0, 0, 0,
  0, 0, 0]

var player_turn = false; //false = O's begin first , true X's begin first
if (player_turn) {
  document.getElementById("o_score").style.opacity = "0.4";
}
else {
  document.getElementById("x_score").style.opacity = "0.4";
}
myVivusX_score = new Vivus("x_score", { type: 'oneByOne', duration: 50 });
myVivusX_score.play();
myVivusO_score = new Vivus("o_score", { type: 'oneByOne', duration: 50 });
myVivusO_score.play();


// event player clicked on box
function clk(box_pos) {

  console.log(board);
  if (board[box_pos[1] - 1]) { //check if the spot is empty
    console.log('nothing');
    return;
  }
  else {

    if (player_turn) {
      board[box_pos[1] - 1] = 'X';
      draw(box_pos, 'x' + box_pos[1]);
      player_turn = false;
      document.getElementById("x_score").style.opacity = "0.4";
      document.getElementById("o_score").style.opacity = "1.0";

    }
    else {
      board[box_pos[1] - 1] = 'O';
      draw(box_pos, 'o' + box_pos[1]);
      player_turn = true;
      document.getElementById("x_score").style.opacity = "1.0";
      document.getElementById("o_score").style.opacity = "0.4";
    }
  }
  

}

//just draws the X's and O's on the board
function draw(pos, source) {
  console.log(pos, source)
  switch (pos) {

    case 'k1':

      myVivus1 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus1.play();
      break;

    case 'k2':

      myVivus2 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus2.play();
      break;

    case 'k3':

      myVivus3 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus3.play();
      break;

    case 'k4':

      myVivus4 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus4.play();
      break;
    case 'k5':


      myVivus5 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus5.play();
      break;
    case 'k6':

      myVivus6 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus6.play();
      break;
    case 'k7':


      myVivus7 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus7.play();
      break;
    case 'k8':


      myVivus8 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus8.play();
      break;
    case 'k9':


      myVivus9 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      document.getElementById(source).style.visibility = 'visible';
      myVivus9.play();
      break;


    default:
      console.log("Eroor in Switch")
      break;
  }
}

//checks if anybody has won, code credit: https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
function has_anybody_won() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = board[winCondition[0]];
    let b = board[winCondition[1]];
    let c = board[winCondition[2]];
    if (a === 0 || b === 0 || c === 0) {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      if (player_turn) {
        alert('O has won');
        console.log('O has won');
        return true;
      }
      else {
        alert('X has won');
        console.log('X has won');
        return true;
      }

    }
  }
  return false;

}






