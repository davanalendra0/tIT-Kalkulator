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

let A = buatInput("matrixA");
let B = buatInput("matrixB");

function operasiMatriks(A, B, operator, skalar = null) {
    let hasil= [];
    if (operator === '+') {
        for (let i = 0; i < 2; i++) {
            hasil.push([parseInt(A[i][0].value) + parseInt(B[i][0].value), parseInt(A[i][1].value) + parseInt(B[i][1].value)]);
        }
    } else if (operator === '-') {
        for (let i = 0; i < 2; i++) {
            hasil.push([parseInt(A[i][0].value) - parseInt(B[i][0].value), parseInt(A[i][1].value) - parseInt(B[i][1].value)]);
        }
    } else if (operator === '*') {
        for (let i = 0; i < 2; i++) {
            hasil.push([A[i][0].value * B[0][0].value + A[i][1].value * B[1][0].value, A[i][0].value * B[0][1].value + A[i][1].value]);
        }
    } else if (operator === 's') {
        let s = parseInt(skalar);
        for (let i = 0; i < 2; i++) {
            hasil.push([s * parseInt(A[i][0].value), s* parseInt(A[i][1].value)]);
        }
    }
    return hasil;
}

function hitung() {
    let operator = document.getElementById("operator").value;
    let skalar = document.getElementById("skalar").value;
    let hasilMatriks = operator === 's' ? operasiMatriks(A, null, 's', skalar) : operasiMatriks(A, B, operator);
    let hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = "";
    hasilMatriks.forEach(row => {
        let rowDiv = document.createElement("div");
        row. forEach(num => {
            let span = document.createElement("span");
            span.className = "result";
            span.innerText = num;
            rowDiv.appendChild(span);
        });
        hasilDiv.appendChild(rowDiv);
    });
}
