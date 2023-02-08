console.log( "Trabalhando com condicionais");

const listaDeDestinhos = new Array ( 
    `Salvador`,
    `São Paulo `,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinhos)

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinhos.splice(1,1);// excluir um item da lista

// } else if(estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinhos.splice(1,1);// excluir um item da lista
// }else{
//     console.log("Não é maior de idade não posso vender");
// }


if(idadeComprador >= 18 || estaAcompanhada == true )  {
    //Operador de OU = ||
    console.log("Seu Destino foi escolhido: \n Rio de Janeiro.");
    listaDeDestinhos.splice(2,1);// excluir um item da lista
} else {
    console.log("Não é maior de idade não posso vender");
}

console.log("Embarque : \n");
if(idadeComprador >= 18 && temPassagemComprada)  {
    // Operador de E = &&
    console.log ("Boa Viagem !");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinhos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
