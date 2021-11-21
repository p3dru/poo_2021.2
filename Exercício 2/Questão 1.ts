let array_numeros : number[] = [1, 1, 1, 1, 1, 5];
let soma : number = 0;
for (let numero :  number = 0; numero < array_numeros.length; numero++)
{
    soma += array_numeros[numero]
}

console.log(soma);