let pos = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var player_turn = false;


function clk(p1) {
  
  console.log(player_turn)
  
  if (player_turn) {
    draw(p1, 'x.svg');
    player_turn = false;
  }
  else {
    draw(p1, 'o.svg');
    player_turn = true;
  }
}

function draw(pos, source) {

  switch (pos) {

    case 'k1':
      document.getElementById('m1').data = source;

      myVivus1 = new Vivus('m1', { type: 'oneByOne', duration: 25 });
      document.getElementById('m1').style.visibility = 'visible';
      myVivus1.play();
      break;

    case 'k2':
      document.getElementById('m2').data = source;

      myVivus2 = new Vivus('m2', { type: 'oneByOne', duration: 25 });
      document.getElementById('m2').style.visibility = 'visible';
      myVivus2.play();
      break;

    case 'k3':
      document.getElementById('m3').data= source;

      myVivus3 = new Vivus('m3', { type: 'oneByOne', duration: 25 });
      document.getElementById('m3').style.visibility = 'visible';
      myVivus3.play();
      break;

    case 'k4':
      document.getElementById('m4').data= source;

      myVivus4 = new Vivus('m4', { type: 'oneByOne', duration: 25 });
      document.getElementById('m4').style.visibility = 'visible';
      myVivus4.play();
      break;
    case 'k5':
      document.getElementById('m5').data= source;  
      
      myVivus5 = new Vivus('m5', { type: 'oneByOne', duration: 25 });
      document.getElementById('m5').style.visibility = 'visible';
      myVivus5.play();
      break;
    case 'k6':
      document.getElementById('m6').data= source;

      myVivus6 = new Vivus('m6', { type: 'oneByOne', duration: 25 });
      document.getElementById('m6').style.visibility = 'visible';
      myVivus6.play();
      break;
    case 'k7':
      document.getElementById('m7').data= source;  

      myVivus7 = new Vivus('m7', { type: 'oneByOne', duration: 25 });
      document.getElementById('m7').style.visibility = 'visible';
      myVivus7.play();
      break;
    case 'k8':
      document.getElementById('m8').data= source;  

      myVivus8 = new Vivus('m8', { type: 'oneByOne', duration: 25 });
      document.getElementById('m8').style.visibility = 'visible';
      myVivus8.play();
      break;
    case 'k9':
      document.getElementById('m9').data= source;  
    
      myVivus9 = new Vivus('m9', { type: 'oneByOne', duration: 25 });
      document.getElementById('m9').style.visibility = 'visible';
      myVivus9.play();
      break;


    default:
      break;
  }
}


