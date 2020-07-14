let pos = [0, 0, 0, 0, 0, 0, 0, 0, 0]




function clk(p1) {
  console.log("clicked " + p1)
  
  draw(p1)
}

function draw(pos,symbol) {
  
  switch (pos) {
    
    case 'k1':  
      myVivus1 = new Vivus('m1',{type:'oneByOne',duration:30}); 
      document.getElementById('m1').style.visibility = 'visible';
      myVivus1.play();
      break;
    case 'k2':  
    myVivus2 = new Vivus('m2',{type:'oneByOne',duration:30});

      document.getElementById('m2').style.visibility = 'visible';
      myVivus2.play();
      break;
    case 'k3': 
    myVivus3 = new Vivus('m3',{type:'oneByOne',duration:30});
 
      document.getElementById('m3').style.visibility = 'visible';
      myVivus3.play();
      break;
    case 'k4':  
    myVivus4 = new Vivus('m4',{type:'oneByOne',duration:30});

      document.getElementById('m4').style.visibility = 'visible';
      myVivus4.play();
      break;
    case 'k5': 
    myVivus5 = new Vivus('m5',{type:'oneByOne',duration:30});
 
      document.getElementById('m5').style.visibility = 'visible';
      myVivus5.play();
      break;
    case 'k6': 
    myVivus6 = new Vivus('m6',{type:'oneByOne',duration:30});
 
      document.getElementById('m6').style.visibility = 'visible';
      myVivus6.play();
      break;
    case 'k7':  
    myVivus7 =new Vivus('m7',{type:'oneByOne',duration:30});

      document.getElementById('m7').style.visibility = 'visible';
      myVivus7.play();
      break;
    case 'k8':  
    myVivus8 = new Vivus('m8',{type:'oneByOne',duration:30});

      document.getElementById('m8').style.visibility = 'visible';
      myVivus8.play();
      break;
    case 'k9':  
    myVivus9 = new Vivus('m9',{type:'oneByOne',duration:30});

      document.getElementById('m9').style.visibility = 'visible';
      myVivus9.play();
      break;
    
  
    default:
      break;
  }
}


