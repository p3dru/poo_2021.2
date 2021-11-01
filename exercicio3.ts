/* 1 - Sim, pois para que o método adicionarReserva() funcione, é necessário que um número de início seja
atribuído para quantReservas

Respost certa: O erro de compilação encontra-se em não utilizar this. em quantReservas();
               o erro em tempo de execução é que há um erro na inicialização do atributo,
               uma vez que ele é apresentado como NaN

2- 

class Hotel{
    quantReservas : number;
    adicionarReserva() : void{
        this.quantReservas++;
    }

    constructor(quantReservas : number){
        this.quantReservas = quantReservas;
    }
}

let hotel : Hotel = new Hotel(4);
console.log(hotel.quantReservas); //ou hotel.adicionarReserva(); -> console.log(hotel.quantReservas);

3 - O erro de compilação se deu pois a classe Radio precisa de um argumento, no caso, um valor para volume. A
solução mais simples seria iniciar o new Radio já passando como argumento ou

Resposta mais direta:  Faltou a inicialização do parâmetro do contrutor

class Radio
{
    volume : number;

    constructor(volume : number)
    {
        this.volume = volume;
    }
}

let r : Radio;
let volume : number = 10;
r = new Radio(volume = 10)
console.log(r.volume) // ou let radio : Radio = new Radio(10); -> console.log(radio.volume) 

4 - 
a) O resultado dos prints são ambos 90. Porquê na linha c1 = c2, c1 torna0-se também referência para o objeto c2.
b) Ele perde a referência e depois de um tempo é excluído da memória pelo garbage colector (libera a memória)

5 - Resposta copiada mas entendida
class Jogador {
    constructor( public forca : number, 
                 public nivel : number, 
                 public pontosAtuais: number) {}
    
    nivelAtaque() : number {
        return this.forca * this.nivel; // faz uma função normal
    }

    atacar(j : Jogador) {
        j.pontosAtuais = j.pontosAtuais - this.nivelAtaque(); //recebe um novo jogador, e compara com o this.jogador (atual)
    }
}

let j1 : Jogador = new Jogador(10, 2, 1000);
let j2 : Jogador = new Jogador(10, 1, 1000);

j1.atacar(j2);
console.log(j2.pontosAtuais);

j2.atacar(j1);
console.log(j1.pontosAtuais);



6 - Resposta copiada mas entendida
class Conta {
    numero: String;
    saldo: number;

    constructor(num: String, saldoInicial: number) {
        this.numero = num;
        this.saldo = saldoInicial;
    }

    sacar(valor: number): boolean {
        let saldoOk: boolean = false;

        if (this.saldo - valor > 0) {
            this.saldo = this.saldo - valor;
            saldoOk = true;
        }

        return saldoOk;
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        let saldoOk = this.sacar(valor);
        
        if (saldoOk == true) {
            contaDestino.depositar(valor);
        }

        return saldoOk;
    
    }

}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);

c1.transferir(c2, 600);

console.log(c1.saldo);
console.log(c2.saldo);



7 - Resposta copiada mas entendida

class Produto {

    constructor(public codigo: string, 
                public descricao : string, 
                public quantidade: number,
                public quantidadeMinima: number,
                public valor: number) {}

    baixar(quantidade: number) {
        if ((this.quantidade - quantidade) - this.quantidadeMinima >= 0) {
            this.quantidade -= quantidade;
        }    
    }

    repor(quantidade: number) {
        this.quantidade += quantidade;
    }

    reajustar(taxa : number) {
        this.valor = this.valor + this.valor * taxa/100;
    }

    toString() : string {
        return  `       Código: ${this.codigo} - Desc.: ${this.descricao}   
        Quant.: ${this.quantidade} Min.: ${this.quantidadeMinima}  
        Valor.: ${this.valor}`;
    }

    equals(p : Produto): boolean {
        return (this.codigo == p.codigo);
    }
}

let p1 : Produto = new Produto("1", "arroz", 10, 4, 7.00);
let p2 : Produto = new Produto("2", "feijao", 10, 1,  8.00);
p1.baixar(3);
p1.baixar(4); //desconsiderada, pois deixaria o estoque abaixo do mínimo
console.log(p1.quantidade);
p2.repor(10);
console.log(p2.quantidade);

p2.reajustar(10);
console.log(p2.valor);
console.log(p2.toString());

console.log(p1.equals(p2));
let p3 : Produto = new Produto("2", "feijão carioquinha", 10, 7, 100);
console.log(p3.equals(p2));
*/  