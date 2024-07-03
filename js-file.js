const container = document.querySelector(".container");

function createGrid(size){
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.className = "row";
        for (let i = 1; i < size; i++) {
          const square = document.createElement("div");
          row.appendChild(square);
          square.className = "gridSquare";
        square.style.height =(800/size) + "px";
        square.addEventListener("mouseover", ()=>{
        square.style.background = "black";   
        });
        }   
    }
    };
    
      
const btn=document.querySelector("button");
btn.addEventListener("click", ()=>{
    let input=prompt("Enter the number of rows and columns")
    if (input>100 || input<1){
        alert("Invalid input");
    }else {
        createGrid(input);
    }    
})


