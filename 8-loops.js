console.log( "\n Trabalhando com loops");

const listaDeDestinhos = new Array ( 
    `Salvador`,
    `São Paulo `,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos Possiveis:");
console.log(listaDeDestinhos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador  = 0;
let destinoExiste = false;

//Utilizando while 
while(contador <= 4) {
    if (listaDeDestinhos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }/* else{
        console.log("Destino não existe");
    } */
    contador += 1;
}

console.log("Destino existe : ",destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log ("Desculpa tivemos um erro!")  
    
}

// utilizando o for
for(let i = 0; i <= 4; i ++) {
    if (listaDeDestinhos[contador] == destino){
        destinoExiste = true;
        
    }/* else{
        console.log("Destino não existe");
    } */

}

