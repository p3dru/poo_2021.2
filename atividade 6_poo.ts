/*
1° - 
class Veiculo{
    public placa: string;
    public ano: number;

    constructor(placa: string, ano: number){
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo{
    public modelo: string;

    constructor(placa: string, ano: number, modelo: string){
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro{
    public autonomia: number;

    constructor(placa: string, ano: number, modelo: string, autonomia: number){
        super(placa, ano, modelo);
        this.autonomia = autonomia;
    }

}

2° - 
class Calculadora{
    private _op1: number;
    private _op2: number;

    constructor(_op1: number, _op2: number){
        this._op1 = _op1;
        this._op2 = _op2;
    }

    adicionar(_op1: number, _op2: number){
        return _op1 + _op2;
    }
}

let calc = new Calculadora(13, 15);
let c = calc.adicionar(13,12)
console.log(c)
//console.log(calc._op1)

3° - 
class CalculadoraCientifica extends Calculadora{
    exponenciar(_op1: number, _op2: number){
        return _op1 ** _op2;
    }
}

let cc = new CalculadoraCientifica(0, 0);
let d = cc.exponenciar(4, 4);
console.log(d)

Não foi necessária nenhuma alteração

4° -


5° -
class Produto{
    private _id: number;
    private _descricao: string;
    private _quantidade: number;
    private _valor: number;

    constructor(_id: number, _descricao: string, _quantidade: number, _valor: number){
        this._id = _id;
        this._descricao = _descricao;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }

    get id(): number{
        return this._id;
    }

    set id(_id: number){
        this._id = _id;
    }

    get descricao(): string{
        return this._descricao;
    }

    set descricao(_descricao: string){
        this._descricao = _descricao;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    set quantidade(_quantidade: number){
        this._quantidade = _quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    set valor(_valor: number){
        this._valor = _valor;
    }

    repor(quantidade: number){
        this._quantidade = this._quantidade + quantidade;
    }

    darBaixa(quantidade: number){
        this._quantidade = this._quantidade - quantidade;
    }
}

class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;
    private _dataAtual: Date;

    constructor(_id: number, _descricao: string, _quantidade: number, _valor: number, _dataValidade: Date, _dataAtual: Date){
        super(_id, _descricao, _quantidade, _valor);
        this._dataValidade = _dataValidade;
        this._dataAtual = _dataAtual;
    }

    get dataValidade(): Date{
        return this._dataValidade;
    }

    set dataValidade(_dataValidade: Date){
        this._dataValidade = _dataValidade;
    }

    get dataAtual(): Date{
        return this._dataAtual;
    }

    set dataAtual(_dataAtual: Date){
        this._dataAtual = new Date;
        this._dataAtual.getDate();
    }

    aindaValido(): boolean{
        if (this._dataAtual > this._dataValidade){
            return false;
        }
        else{
            return true;
        }
    }
}

class Estoque{
    private _produto: Produto[] = [];

    inserir(produto: Produto): void{
        let produtoId = this.consultar(produto.id)

        if(produtoId == null){
            this._produto.push(produto)
        }
    }

    consultar(id: number): Produto{
        let produtoConsult: Produto;
        for (let produto of this._produto){
            if(produto.id == id){
                produtoConsult = produto;
                break;
            }
        }
        return produtoConsult;
    }

    remover(id: number): Produto{
        for (let produto of this._produto){
            if(produto.id == id){
                let indice: number = this._produto.indexOf(produto);
                this._produto.splice(indice)
            }
        }
    }
}

//Foi mal professor, minha cabeça já não conseguiu pensar mais depois daqui

*/