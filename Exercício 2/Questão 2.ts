let a : number[] = [1, 2, 3, 4, 5];
for (let i : number = 0; i <= a.length - 1; i++)
{
    console.log(a[i]);
}

console.log(a[4]);

//Na primeira linha é criado um vetor numérico a
//na segunda linha é iniciado um loop para que print todos os valores do vetor
/*A saída é: 1, 2, 3, 4, 5 e undefined (porquê ele começa em 0 e vai até 5 que é o tamanho do vetor,
realizando 6 voltas e como o vetor não possui 6 elementos ele devolve undefined, pois o array é 0 indexado
e o ultimo item pode ser acessado com a.length - 1)
*/  