/* Atividade 4

1 - F, V, V, V, F, V, F, V

2 - 
class Triangulo{
    l1 : number;
    l2 : number;
    l3 : number;


    constructor(l1 : number, l2 : number, l3 : number){
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    ehRetangulo(triangulo : Triangulo) : boolean{
        
        let modulo = triangulo.l2 - triangulo.l3;
        if(modulo < 0){
            modulo = modulo * -1;
        }

        if(modulo < triangulo.l1 && triangulo.l1 < triangulo.l2 + triangulo.l3){
            return true
        }
        else{
            return false;
        }
    }

    ehIsosceles(triangulo : Triangulo) : boolean{
        let confirmacao : boolean = this.ehRetangulo(triangulo);
        
        if(confirmacao == false){
            return false
        }
        else{
            if((triangulo.l1 == triangulo.l2 && triangulo.l2 != triangulo.l3) || (triangulo.l3 == triangulo.l2 && triangulo.l3 != triangulo.l1)|| (triangulo.l1 == triangulo.l3 && triangulo.l1 != triangulo.l2)){
                return true
            }
            else{
                return false
            }
        }
    }

    ehEquilatero(triangulo : Triangulo) : boolean{
        let confirmacao : boolean = this.ehRetangulo(triangulo);

        if(confirmacao == false){
            return false;
        }
        else{
            if(triangulo.l1 == triangulo.l2 && triangulo.l2 == triangulo.l3){
                return true;
            }
            else{
                return false;
            }
        }
    }

    ehEscaleno(triangulo : Triangulo) : boolean{
        let confirmacao : boolean = this.ehRetangulo(triangulo);
        
        if(confirmacao == false){
            return false;
        }
        else{
            if(triangulo.l1 != triangulo.l2 && triangulo.l1 != triangulo.l3 && triangulo.l2 != triangulo.l3){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

let triangulo : Triangulo = new Triangulo(4, 4, 4);
console.log(triangulo.ehRetangulo(triangulo));
console.log(triangulo.ehIsosceles(triangulo));
console.log(triangulo.ehEscaleno(triangulo));
console.log(triangulo.ehEquilatero(triangulo));


3 - Resposta copiada mas entendida
class Conta {
	numero: String;
	saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
		}
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this.contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this.contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (conta of this.contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }
}


let conta : Conta = new Conta("1", 100)
let b: Banco = new Banco();
b.inserir(conta);
b.inserir(new Conta("1", 20));
//b.sacar("1",20);
console.log(conta.saldo);

b.inserir(new Conta("2", 200));

b.transferir("1","2", 10);
console.log(b.consultar("1").saldo);
console.log(b.consultar("2").saldo);
console.log(b.calcularQuantidadeContas());
console.log(b.calcularTotalSaldos());
console.log(b.calcularMediaSaldos());



4 -
class Postagem{
    id : number;
    texto : string;
    quantidadeCurtidas : number;

    constructor(id : number, texto : string, quantidadeCurtidas : number){
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir() : void{
        this.quantidadeCurtidas++;
    }

    toString() : void{
        let texto : string = this.texto;
        let curtida : string = this.quantidadeCurtidas;
        let valores = `A postagem: ${texto}, obteve ${curtida} curtidas.`
        console.log(valores)
    }
}

let blog : Postagem = new Postagem(1, 'XANANAN', 0)
blog.curtir();
blog.curtir();
blog.curtir();
blog.curtir();
blog.curtir();
blog.curtir();
blog.curtir();
blog.toString();



*/