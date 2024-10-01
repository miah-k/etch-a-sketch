
function createGrid(numOfSquares = 16){
    let offset = 0; 
    for(let i = 0; i < numOfSquares; i++){
        for(let j = 0; j < numOfSquares; j++){
            const divSquare = document.createElement('div'); 
            let squareMeasurement = 128/numOfSquares; 
            divSquare.style.height= `${squareMeasurement}px`;
            divSquare.style.width = `${squareMeasurement}px`; 
            divSquare.style.backgroundColor = "yellow";  
            divSquare.id =i+offset; 
            document.getElementById("container").appendChild(divSquare); 
            offset++; 
        }
    }
}

function checkHover(){
    const divContainer = document.querySelector("#container"); 
    divContainer.addEventListener("mouseover", function(e){
        let myDiv = document.getElementById(e.target.id); 
        myDiv.style.backgroundColor = generateRGB();  
    }); 
}

function resetBoard(){
    const bttn = document.querySelector("#reset-button"); 
    bttn.addEventListener("click", function(){
        let squareAmnt = prompt("How many number of squares per side?"); 
        if(squareAmnt >= 100){
            squareAmnt = prompt("Enter an amount less than 100"); 
        }
        removeGrid(); 
        if(squareAmnt == null){
            createGrid(); 
        }
        else{
            createGrid(squareAmnt); 
        }
    }); 
}

function removeGrid(){
    const parentDiv = document.querySelector("#container"); 
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}

function generateRGB(){
    let redVal = Math.floor(Math.random() * 256); 
    let greenVal = Math.floor(Math.random() * 256); 
    let blueVal = Math.floor(Math.random() * 256); 
    return (`rgb(${redVal}, ${greenVal}, ${blueVal})`);  
}

generateRGB(); 
checkHover();
resetBoard();  
createGrid(); 
