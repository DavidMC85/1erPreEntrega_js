//--variables globales

var valorVisor = 0;
var numeroA;
var numeroB;
var operacion;
var ahora = new Date;

    //asignamiento de valores a las teclas
function boton(tecla) {
    var auxiliar = document.getElementById("visor").value;
    document.getElementById("visor").value = auxiliar + tecla; 


    valorVisor = document.getElementById("visor").value = auxiliar + tecla;
    
    // saludos
    var hora = ahora.getHours();
    
    if(hora >= 0 && hora <= 12){
      document.getElementById("historico").textContent = "Bien.. Arrancamos antes de las 12..";
    }
    if(hora >= 13 && hora <= 17){
      document.getElementById("historico").textContent = "Recien te levantas? Vago de m..";
    }
    if(hora >= 18 && hora <= 23){
      document.getElementById("historico").textContent = "Prepará un fernee viejaaa";
    }
}


function btn_suma(caracter){
    numeroA = valorVisor;
    operacion = "+";
    
    limpar();
}

function btn_resta(caracter){
  numeroA = valorVisor;
  operacion = "-";
  
  limpar();
}

function btn_multiplicacion(caracter){
  numeroA = valorVisor;
  operacion = "*";
  
  limpar();
}

function btn_division(caracter){
  numeroA = valorVisor;
  operacion = "/";
  
  limpar();
}

function reset() {
    // limpar visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacion = "";
}
function limpar(){
    document.getElementById('visor').value = '';
    
}

function btn_igual(){
    numeroB = valorVisor;
    resultado();
}

function resultado() {
    // faz o calculo, pega o resultado e colocar no visor
    //document.getElementById('visor').value = eval(resultado);

    //document.getElementById('visor').value = resultado;
    //document.getElementById('visor').value = eval(valorVisor);

    var total = 0;
    var ultimoTotal = 0;
      switch(operacion){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;

}


