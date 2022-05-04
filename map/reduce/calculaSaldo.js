const lista = [
    {
        nome: 'sabao em po',
        preco: 18,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome: 'toalha',
        preco: 25,
    },
];

const saldoDsiponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel )
}

console.log(calculaSaldo(saldoDsiponivel, lista));