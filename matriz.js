const matriz1=[
     [1, 2, -1],
     [6, 5, 4 ],
     [-9, 8, 9]
]
const matriz2=[
     [1, 2, -1,5],
     [6, 5, 4 ,5],
     [-9, 8, 9,2],
     [-9, 8, 9,2],
]

function additionDiagonalMatrices(matriz){
    let contador=0
    let diagonalDescendente=0
    let diagonalAscendente=0
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if(j==contador){
                diagonalDescendente+=matriz[i][j]
            }
        }
        contador++;
    }
    contador=0;
    for(let i=matriz.length-1;i>=0;i--){
        for(let j=0;j<matriz[i].length;j++){
            if(j==contador){
                diagonalAscendente+=matriz[i][j]
            }
        }
        contador++;
    }
    console.log(Math.abs(diagonalAscendente- diagonalDescendente))
}

additionDiagonalMatrices(matriz1)

additionDiagonalMatrices(matriz2)