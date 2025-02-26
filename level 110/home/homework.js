let matrix = [];

for(let i = 0; i < 7; i ++){
    matrix.push([]);
    for(let j = 0; j < 6; j++){
        matrix[i].push(Math.floor(Math.random() * 100));
    };
};

// 1

let calcAvarage = function(matrix){
    let rowAvarage = [];
    let columnAvarage = [];
    
    for (let i = 0; i < matrix.length; i++){
        let res = 0;
        for(let j = 0; j < matrix[i].length; j ++){
          res += matrix[i][j]
        };
        res = res / matrix[i].length;
        rowAvarage.push(res);
    };
    
    for (let i = 0; i < matrix[0].length; i++){
        let res = 0;
        for(let j = 0; j < matrix.length; j ++){
          res += matrix[j][i]
        };
        res = res / matrix.length;
        columnAvarage.push(res);
    };
    
    return {rowAvarage, columnAvarage};
};

console.log(calcAvarage(matrix))

// 2
let change = function(matrix){
  for(let i = 0; i < matrix.length; i ++){
      for(let j = 0; j < matrix[i].length; j++){
          if (j % 2 == 0){
              matrix[i][j] /= 2
          } else{
              let floor = Math.floor(matrix[i][j] / 13)
              if (floor > matrix[i][j]){
                  floor --
              };
              matrix[i][j] = matrix[i][j] / 13 - floor
          };
      };
  };
  return matrix;
};

console.log(change(matrix));

// 3
let matrix1 = [];

for(let i = 0; i < 5; i ++){
    matrix1.push([]);
    for(let j = 0; j < 6; j++){
        matrix1[i].push(Math.floor(Math.random() * 100));
    };
};

let swap = function(matrix){
  let x = matrix1[0][0];
  matrix1[0][0] = matrix1[matrix.length - 1][matrix1[matrix1.length - 1].length - 1];
  matrix[matrix1.length - 1][matrix1[matrix1.length - 1].length - 1] = x;
  return matrix1;
};

console.log(swap(matrix1));
// 4
let matrix2 = [];

for(let i = 0; i < 6; i ++){
    matrix2.push([]);
    for(let j = 0; j < 5; j++){
        matrix2[i].push(Math.random() < 0.5);
    };
};

let swap2 = function(matrix){
    let x = matrix[1];
    matrix[1] = matrix[5];
    matrix[5] = x;
    return matrix;
};

console.log(swap2(matrix2));

// 5
let matrix3 =[]
let n = Math.floor(Math.random()*10);
let m = Math.floor(Math.random()*10);

for(let i = 0; i < n; i++){
    matrix3.push([])
    for(let j = 0; j < m; j++){
        matrix3[i].push(Math.floor(Math.random()*100))
    }
}

console.log(matrix3)