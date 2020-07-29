var board = [0, 0, 0,
  0, 0, 0,
  0, 0, 0]

var player_turn = false;

// event player clicked on box
function clk(box_pos) {

  if (board[box_pos[1]]) { //check if the spot is empty
    console.log('nothing');
    return;
  }
  else {
    board[box_pos[1]] = 1;
    if (player_turn) {
      draw(box_pos, 'x' + box_pos[1]);
      player_turn = false;
    }
    else {
      draw(box_pos, 'o' + box_pos[1]);
      player_turn = true;
    }
  }
}

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


