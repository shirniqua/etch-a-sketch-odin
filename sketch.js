const cont = document.getElementById("container")

function createGrid (gridSize){
    cont.replaceChildren()
    let items = gridSize
    let count = 1
    let rowID
    for (let i=0; i<items; i++) {
        //create the row
        const addRow = document.createElement("div")
        addRow.classList.add("row")
        rowID = "row" + count
        addRow.id = rowID
        for (let x=0; x<items; x++){
            //create same amount of items in the row
            const addTile = document.createElement("lightnessdiv")
            addTile.classList.add("tile")
            addRow.appendChild(addTile)
        }
        //create same amount of items in the row
        cont.appendChild(addRow)
        count++
    }
}

    
function changeTileColor(hoveredTile){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    hoveredTile.style.backgroundColor = `rgb(${r},${g},${b})`

    let currentOpacity = parseFloat(hoveredTile.style.opacity) || 0
    hoveredTile.style.opacity = Math.min(1, currentOpacity + 0.1)
}

function enableHover() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile =>
    tile.addEventListener('mouseover', () => changeTileColor(tile))
  );
}

/*
function addRowTiles (rowAmount, rowNumID){
    let amt = rowAmount
    let rID = rowNumID
    const p = document.getElementById("rID")
    for (let x=0; x<amt; x++){
        //create same amount of items in the row
        const addTile = document.createElement("div")
        addTile.classList.add("tsile")
        p.appendChild(addTile)
    }
}
*/

const button = document.getElementById("button")
button.onclick = () => {
    let size = prompt("Enter the size of your grid, less than 100")
    if (size > 100) {
        alert("Grid size must be no more than 100!")
        createGrid(0)
    }
    else {
        createGrid (size)
        enableHover();
    }
}





  
    


