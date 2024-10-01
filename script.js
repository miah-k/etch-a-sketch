
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const divSquare = document.createElement('div'); 
        divSquare.style.height= "8px";
        divSquare.style.width = "8px"; 
        divSquare.style.backgroundColor = "gray";  
        document.getElementById("container").appendChild(divSquare); 
    }
}

