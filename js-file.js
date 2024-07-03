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
        }
    }
    const item = document.querySelectorAll('.gridSquare');
        item.forEach((square) => {
        square.addEventListener("mouseover", ()=>{
        square.style.background = "black";   
        });
    });
    
      }
    
createGrid(16);


