const container = document.querySelector("#container");
const allRows = document.getElementsByClassName("row");
let GRID_SIZE = 16;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  GRID_SIZE = parseInt(prompt("Enter size", "10"));
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createRows();
  createCells();
});

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
        let colors = [
          "#fb4934",
          "#b8bb26",
          "#fabd2f",
          "#83a598",
          "#d3869b",
          "#8ec07c",
        ];
        if (cell.style.backgroundColor == "") {
          cell.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        }
      });
      allRows[i].append(cell);
    }
  }
}

createRows();
createCells();
