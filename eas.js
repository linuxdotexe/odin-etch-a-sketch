const container = document.querySelector("#container");
const allRows = document.getElementsByClassName("row");
const GRID_SIZE = parseInt(prompt("Enter grid size:", "16")) || 16;

function createRows() {
  for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);
  }
}

function createCells() {
  for (let i = 0; i < allRows.length; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.cssText = `width: calc((960px - 30px) / ${GRID_SIZE}); height: calc((960px - 30px) / ${GRID_SIZE});`;
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "pink";
      });
      allRows[i].append(cell);
    }
  }
}

createRows();
createCells();
