class Carro {
    constructor(marca, modelo)
    {
        this.marca = marca
        this.modelo = modelo
        this.velocidade = 0
    }

    acelerar(vezes)
    {
        this.velocidade = vezes
        alert(`O veículo ${this.marca} ${this.modelo} acelerou para ${this.velocidade} Km/h.`)

    }
    frear()
    {
        this.velocidade = 0
        alert(`O veículo ${this.marca} ${this.modelo} parou`)
    }
}//Fim Classe Carro

//Criar um Objeto
const automovel = new Carro('Honda', 'HRV')

//Usando Métodos
automovel.acelerar(80)
automovel.frear()