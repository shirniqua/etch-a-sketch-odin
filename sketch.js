let size = 16
const cont = document.getElementById("container")
//const addRow = document.createElement("div")

function createGrid (gridSize){
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
            const addTile = document.createElement("div")
            addTile.classList.add("tile")
            addRow.appendChild(addTile)
        }
        //create same amount of items in the row
        cont.appendChild(addRow)
        count++
    }
}

function changeTileColor(hoveredTile){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let col = "rgb(" + r + "," + g + "," + b + ")"
    hoveredTile.style.backgroundColor = col
}

/*
function addRowTiles (rowAmount, rowNumID){
    let amt = rowAmount
    let rID = rowNumID
    const p = document.getElementById("rID")
    for (let x=0; x<amt; x++){
        //create same amount of items in the row
        const addTile = document.createElement("div")
        addTile.classList.add("tile")
        p.appendChild(addTile)
    }
}
*/



createGrid (16)
const colorChange = document.querySelectorAll(".tile")
const allTiles = document.querySelectorAll(".tile");

    colorChange.forEach(tile => {
        tile.addEventListener(
            "mouseover", (event) => {
            changeTileColor(event.target);
        }
        //new mouse events
    );
    });
