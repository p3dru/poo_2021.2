/*
1 - Classes são estruturas que descrevem as propriedades/atributos que um objeto terá. Objetos são elementos
computacionais que representam alguma entidade concreta ou abstrata, são basicamente entetidades criadas pela
atribuição de valores aos atributos/propriedades contidos nas classes dos quais pertencem.
Ex: A planta de uma casa que é uma classe na qual se fazem casas e uma casa que é o objeto que para ser construída
foi necessário seguir o formato descrito na planta.

2 - Atributos são características/estados dos objetos e métodos são as ações que esses objetos fazem (funções).
Ex: Um cachorro que possui como atributos tipo_de_pelos, cor_dos_focinho, raça, altura... E os métodos anda, come,
corre... (Executa as ações)

3 - Atributo                Importante                  Não importante
    Peso                    Sistema de                  Sistema bancário
                            acompanhamento de
                            peso/app de exercícios

    Tipo de CNH             Sistema de renovação        Sistema universitário
                            de carteira

    Habilidade destra       Sistema médico              Sistema que rankeia atletas
                                                        de e-sports

    Percentual de gordura   App de exercícios           Sistema bancário
    
    Saldo em conta          Sistema bancário            Sistema universitário
    
    Etnia                   Censo                       App de exercícios


4 - Sim, pois o objeto pessoa identificaria o dono da conta. Sim, um array melhor representaria um conjunto de contas

5 - Professores, Diretoria, Notas, Matriz Curricular, Matérias.

6 - Características: Sons, personagens, menu, história, tutorial...
    Métodos: mover, pular, jogar algo, dialogar, fazer o personagem cumprir objetivos

7 -
class Retangulo
{
    l1: number;
    l2: number;

    constructor(l1: number, l2: number)
    {
        this.l1 = l1;
        this.l2 = l2;
    }

    calculaArea(): number
    {
        return this.l1 * this.l2;
    }

calculaPerimetro(): number
{
    return (this.l1+ this.l2) * 2;
}
}

let retangulo : Retangulo;
retangulo = new Retangulo(10, 20);
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(retangulo.calculaPerimetro())

8 -
class Circulo
{
    raio: number;

    constructor(raio: number)
    {
        this.raio = raio;
    }

    calculaArea(): number
    {
        return (this.raio**2) * 3.14;
    }

    calculaPerimetro() : number
    {
        return 2 * 3.14 * this.raio;
    }
}

let circulo : Circulo;
let raio: any;
raio = prompt("raio: ");
circulo = new Circulo(raio);

console.log(circulo.calculaArea());
console.log(circulo.calculaPerimetro());

9 -
class SituacaoFinanceira
{
    credito : number;
    debito : number;

    constructor(credito: number, debito: number)
    {
        this.credito = credito;
        this.debito = debito;
    }

    saldo()
    {
        return this.credito - this.debito;
    }
}

let situacao : any;
let credito: any;
credito = prompt("Credito: ");
let debito: any;
debito = prompt("Debito: ");
situacao = new SituacaoFinanceira(credito, debito);
console.log(situacao.saldo());
*/