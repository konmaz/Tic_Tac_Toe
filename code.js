var board = [0, 0, 0,
  0, 0, 0,
  0, 0, 0]

var player_turn = false; //false = O's begin first , true X's begin first
var counter = 0;
// Just set's the opacity of the current player
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
document.getElementById("x_score").style.opacity = 1;
document.getElementById("o_score").style.opacity = 1;



// event player clicked on box
function clk(box_pos) {

  console.log(board);
  if (board[box_pos[1] - 1]) { //check if the spot is empty
    console.log('nothing');
    return;
  }
  else {
    counter++;
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
  has_anybody_won();

}

//just draws the X's and O's on the board
function draw(pos, source) {
  console.log(pos, source)
  document.getElementById(source).style.display = 'block';

  switch (pos) {

    case 'k1':

      myVivus1 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus1.play();
      break;

    case 'k2':

      myVivus2 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus2.play();
      break;

    case 'k3':

      myVivus3 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus3.play();
      break;

    case 'k4':

      myVivus4 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus4.play();
      break;

    case 'k5':


      myVivus5 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus5.play();
      break;

    case 'k6':

      myVivus6 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus6.play();
      break;

    case 'k7':

      myVivus7 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus7.play();
      break;

    case 'k8':


      myVivus8 = new Vivus(source, { type: 'oneByOne', duration: 25 });
      myVivus8.play();
      break;

    case 'k9':


      myVivus9 = new Vivus(source, { type: 'oneByOne', duration: 25 });
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
      console.log('POS: ', winCondition);
      draw_line(winCondition[0], winCondition[2]);

      if (player_turn) {

        console.log('O has won');
        document.getElementById('o_wins').innerHTML++;
        return true;
      }
      else {

        console.log('X has won');
        document.getElementById('x_wins').innerHTML++;
        return true;
      }

    }
  }
  return false;

}

// removes everything from the board
function reset(params) {
  for (let i = 1; i < 10; i++) {
    document.getElementById('x' + i).style.display = 'none';
    document.getElementById('o' + i).style.display = 'none';
  }
  board = [0, 0, 0,
    0, 0, 0,
    0, 0, 0];
}

// just draws the winer line, start and end are the number of the tile ex 0,1 ... 8.
function draw_line(star, end) {
  val = get_cords(star);
  a = val[0];
  b = val[1];
  val2 = get_cords(end);
  c = val2[0];
  d = val2[1];
  //"Mx1,y1Lx2,y2"
  win_line_svg = document.getElementById('win_line_svg');
  line = document.getElementById("line");
  console.log(val, val2)
  console.log(a, b, c, d);
  line.x1.baseVal.value = a;
  line.y1.baseVal.value = b;
  line.x2.baseVal.value = c;
  line.y2.baseVal.value = d;
  //document.getElementById('win_line_svg').style.zIndex=1;
  document.getElementById('win_line_svg').style.opacity = 1;
  win_line_svg.style.zIndex = 1;
  win_line_svg.style.opacity = 1;
  delete win_line_svg;
  delete line;
  //myVivus_Win_Line.play();
  //myVivus_Win_Line.destroy();
  //myVivus_Win_Line = new Vivus("win_line_svg", { type: 'oneByOne', duration: 30 ,selfDestroy:true},);
  
  setTimeout(function () { reset() }, 3000);
  //setTimeout(function(){document.getElementById('win_line_svg').style.zIndex=-1},3000);
  //setTimeout(function(){document.getElementById('win_line_svg').style.opacity=0},3000);






}

function get_cords(tile) {
  switch (tile) {
    case 0: // 1st tile
      x1 = 15;
      y1 = 15
      break;

    case 1:
      x1 = 50;
      y1 = 15;
      break;

    case 2:
      x1 = 85;
      y1 = 15;
      break;

    case 3:
      x1 = 15;
      y1 = 50;
      break;

    case 4:
      x1 = 50;
      y1 = 50;
      break;
    case 5:
      x1 = 85;
      y1 = 50;
      break;

    case 6:
      x1 = 15;
      y1 = 85;
      break;
    case 7:
      x1 = 50;
      y1 = 85;
      break;
    case 8:
      x1 = 85;
      y1 = 85;
      break;
    default:
      x1 = 50;
      y1 = 50;
      break;
  }
  return [x1, y1];
}