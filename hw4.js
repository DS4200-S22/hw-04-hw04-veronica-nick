let numC1Click = 0;

function circle1Clicked() { 
    let circleSVG = document.getElementById("circleText"); 
    circleSVG.innerHTML = numC1Click + 1; 
    numC1Click++;
}

function circle2Hovered() { 

  let circleSVG = document.getElementById("c2"); 
  if(onmousover){
    circleSVG.style.border === "5px solid black"
  }
  if(onmouseout){
    circleSVG.style.border = "";
  }
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

