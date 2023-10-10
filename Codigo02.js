class Pessoa
{
    constructor(nome,telefone)
    {
        this.nome = nome
        this.telefone = telefone
    }
    
    toString()
    {
        return `${this.nome} | ${this.telefone}\n`
    }

}//fim classe

class Agenda
{
    constructor()
    {
        this.contatos = []
    }
    adicionarContato(contato)
    {
        this.contatos.push(contato)
    }
    listarContatos()
    {
        return this.contatos
    }
    buscarContato(nome)
    {
        return this.contatos.find(contato => contato.nome === nome)
    }
    atualizarContato(nome,novoTelefone)
    {
        const contato = this.buscarContato(nome)
        if(contato)
        {
            contato.telefone = novoTelefone
        }
    }
    deletarContato(nome)
    {
        const index = this.contatos.findIndex(contato => contato.nome === nome)
        if(index !== -1)
        {
            this.contatos.splice(index,1)
        }
    }    
}//fim classe

//criar objeto
const minhaAgenda = new Agenda()

minhaAgenda.adicionarContato(new Pessoa('Paulo','(51)981251436'))
minhaAgenda.adicionarContato(new Pessoa('Roberta','(51)982251447'))
minhaAgenda.adicionarContato(new Pessoa('Carlos','(51)981159379'))
minhaAgenda.adicionarContato(new Pessoa('Laura','(51)981559802'))

alert('Lista de Contatos\n'+minhaAgenda.listarContatos())

const pessoaEncontrada = minhaAgenda.buscarContato('Carlos')
alert('Contato Encontrado\n'+pessoaEncontrada)

minhaAgenda.atualizarContato('Laura','(51)981112233')
alert('Lista de Pessoas Atualizadas\n'+minhaAgenda.listarContatos())

minhaAgenda.deletarContato('Carlos')
alert('Lista de Pessoas Após Exclusão'+minhaAgenda.listarContatos())