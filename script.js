function buatInput(id) {
    let container = document.getElementById(id);
    let matriks = [];
    for (let i = 0; i < 2; i++) {
        let row = [];
        let divRow = document.createElement("div");
        for (let j = 0; j < 2; j++) {
            let input = document.createElement("input");
            input.type = "number";
            input.className = "matrix-input";
            divRow.appendChild(input);
            row.push(input);
        }
        container.appendChild(divRow);
        matriks.push(row);
    }
    return matriks;
}

