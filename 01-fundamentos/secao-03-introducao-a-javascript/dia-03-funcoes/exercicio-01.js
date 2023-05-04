//solução proposta 1

let saldo = 100;

function somaSaldo(valor) {
    return valor + saldo;
};
function subtraiSaldo(valor) {
    return saldo - valor;
}
function multiplicaSaldo(valor) {
    return valor * saldo;
}
function divideSaldo(valor) {
    return saldo / valor;
}
console.log(somaSaldo(50));
console.log(subtraiSaldo(2));
console.log(multiplicaSaldo(6));
console.log(divideSaldo(10));

