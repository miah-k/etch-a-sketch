
let offset = 0; 
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const divSquare = document.createElement('div'); 
        divSquare.style.height= "8px";
        divSquare.style.width = "8px"; 
        divSquare.style.backgroundColor = "yellow";  
        divSquare.id =i+offset; 
        document.getElementById("container").appendChild(divSquare); 
        offset++; 
    }
}

function checkHover(){
    const divContainer = document.querySelector("#container"); 
    divContainer.addEventListener("mouseover", function(e){
        let myDiv = document.getElementById(e.target.id); 
        myDiv.style.backgroundColor="black"; 
    }); 
}

checkHover(); 
