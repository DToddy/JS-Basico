console.log( "Trabalhando com listas");
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo `;
// const rioDeJaneiro = `Rio de Janeiro `;

const listaDeDestinhos = new Array ( 
    `Salvador`,
    `São Paulo `,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinhos.push(`Bahia`);// adicionar item na lista.
console.log("Destinos Possiveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinhos)

listaDeDestinhos.splice(3,1); // excluir um item da lista
console.log(listaDeDestinhos);
console.log(listaDeDestinhos[2]);