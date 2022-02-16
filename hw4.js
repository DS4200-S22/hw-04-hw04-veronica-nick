let numC1Click = 0;

function circle1Clicked() { 
    let circleSVG = document.getElementById("circleText"); 
    circleSVG.innerHTML = numC1Click + 1; 
    numC1Click++;
}

function circle2Hovered() { 
    let circleSVG = document.getElementById("c2"); 
    circleSVG.style.fill = "black"
      //change to make the border change instead of console message
    console.log('hovered!');
  }



function circle3Clicked() { 
    let circleSVG = document.getElementById("c3"); 
    if (circleSVG.style.opacity === "0") {
      circleSVG.style.opacity = "1";
    }
    else {
      circleSVG.style.opacity = "0";
    }
}

