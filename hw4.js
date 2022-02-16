let numC1Click = 0;

function circle1Clicked() { 
    let circleSVG = document.getElementById("circleText"); 
    circleSVG.innerHTML = numC1Click + 1; 
    numC1Click++;
}


let circleSVG = document.getElementById("c2").onmouseover = function() {circle2HoverOver()};

function circle2HoverOver() { 

    circleSVG.style.fill === "5px solid black" 
  }


let circleSVG = document.getElementById("c2").onmouseout = function() {circle2HoverOut()};

function circle2HoverOut() {
    circleSVG.style.border = ""; 
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

