let array : number[] = [12, 45, 22, 28, 99, 64, 234, 65, 33, 11];

//para ordem crescente
array.sort(function(a, b) {
    return a - b;
  });
  console.log(array);

//para ordem decrescente
array.sort(function(a, b) {
    return b - a;
  });
  console.log(array);