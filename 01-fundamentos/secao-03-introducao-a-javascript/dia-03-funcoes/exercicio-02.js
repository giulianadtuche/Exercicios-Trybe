let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return "Cliente adicionado com sucesso!"
    } else {
      return 'O parâmetro passado deve ser do tipo "string"';
    }
}
console.log(adicionaCliente(true));
console.log(adicionaCliente('José'));
console.log(clientesTrybeBank);
