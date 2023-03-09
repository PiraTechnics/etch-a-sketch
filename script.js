const container = document.getElementById("grid-container");

function buildGrid(numCells) {
    let gridSize = 960;
    let cellSize = gridSize/numCells;

    //Overwrite CSS Grid Container Template
    container.style.width = gridSize;
    container.style.height = gridSize;
    container.style.gridTemplateRows = `repeat(${numCells}, ${cellSize}px [row-start])`;
    container.style.gridTemplateColumns = `repeat(${numCells}, ${cellSize}px [col-start])`;
    
    for (let i=1; i<=numCells; i++) {
        //Create 16 rows with 16 columns each
        for (let j=1; j<=numCells; j++) {
            //Create size-by-size grid of divs inside grid-container
            let gridCell = document.createElement("div");
            gridCell.setAttribute("class", "gridCell");
            gridCell.style.height = cellSize + "px";
            gridCell.style.width = cellSize + "px";
            container.appendChild(gridCell);
            console.log(gridSize);
            console.log(cellSize);
    
            gridCell.addEventListener("mouseover", (e) => {
                gridCell.style.backgroundColor = "black";
            });
        }
    }
    
}

function destroyGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//set up button behavior
const resetBtn = document.querySelector("#newGrid");
resetBtn.addEventListener("click", (e) => {
    //Now prompt user for grid dimensions, then reset everything
    let dimension = prompt("Please enter a row/col size:");
    if(dimension > 100) {
        dimension = 100;
        alert("Size too large, using maximum allowed value instead");
    }
    
    //Now remove the older grid, and replace with new one
    destroyGrid(container);
    buildGrid(dimension);
});

document.addEventListener("DOMContentLoaded", () => {
    buildGrid(16);
});
