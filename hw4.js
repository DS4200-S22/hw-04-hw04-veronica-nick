let numC1Click = 0;

function circle1Clicked() { 
    let circleSVG = document.getElementById("circleText"); 
    circleSVG.innerHTML = numC1Click + 1; 
    numC1Click++;
}

function circle3Clicked() { 
    let circleSVG = document.getElementById("c3"); 
    
    circleSVG.style.opacity = "0.2"; 
    
}