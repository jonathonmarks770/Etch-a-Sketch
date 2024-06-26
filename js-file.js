const sketchpad = document.querySelector(".container");

function createGrid(size){
    for (let i=0; i<size*size; i++){
        let squares=document.createElement("div");
        squares.classList.add("squares")
        squares.style.backgroundColor="black";
        sketchpad.style.gridTemplateRows=`repeat(${size}, 1fr)`;
        sketchpad.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
        sketchpad.appendChild(squares);

    }
}
createGrid(16);