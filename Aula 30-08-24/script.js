 //Estrutura de Controle --> For
 //Exemploe 1: Exibir nuemros  de 1 a 5
 //document.write("Numero de 1 a 5:<br>");
 //for( let i = 0; i< 5; i++) {
    //console.log("Interação: " + i);
 //}

 //Exemplor 2: Criar um progrma que solicita aos usuuarios uma quantidade de numeros 
 //let quantidade = parseInt(prompt("Quantidade de numeros: "));
 //console.log(typeof quantidade);
 //for (let i=1; i<=quantidade; i++){
    //document.write(i + "<br>");
 //}
 
//Exemplo 3: Solice um numero e calcular a sime de todos os numero
// let limite = parseInt(prompt("Digite um Limite: "));
// let soma = 0;
// for(let i=1; i<=limite; i++){
//     let numero = parseInt(prompt("Numero: "));
//     document.write("Numero: " + numero + "<br>");
//     soma += numero;
// }
// document.write("Soma dos numeros: " + soma);

 
 //for( let i = 0; i < 10; i++) {
    //if (i === 5){
        //break; //Encerra o loop imediatamente.
    //}
    //console.log("Interação: " + i);
 //}

 //console.log("Fim do Loop");

 //for( let i = 0; i < 10; i++){
    //if (i % 2 === 0) {
        //continue; // Pula a iteração atual e passa para a próxima.        
    //}
    //console.log("Numero Impar: "+ i);
 //}

//  while(i < 5) {
//    console.log("Interação: " + i);
//    i++;
//  }

//Exemplo 2: Somar os numeors positivos
let some = 0;
let numero = 0;
let numeroDigitado = "";

while(numero >=0){
   numero = parseFloat(prompt("Digite um numero(ou um numero negativo)"));
   if (numero >=0){
      soma += numero;
      numeroDigitado += "<br>" + numero;
   }
}

document.write("numeros digitados: " + numeroDigitado + "<br>");
document.write("Soma: " + soma);