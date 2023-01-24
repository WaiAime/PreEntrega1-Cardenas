let nombreAsignado = prompt("Hola! Ingresá su nombre por favor");
let saludo = "Bienvenido " + nombreAsignado;

console.log(saludo);
alert(saludo)

let salir=false;
function sumar(numero1,numero2){
    return numero1+numero2;
}
function restar(numero1,numero2){
    return numero1-numero2;
}
function dividir(numero1,numero2){
    return numero1/numero2;
}
function multiplicar(numero1,numero2){
    return numero1*numero2;
}
function modulo(numero1,numero2){
    return numero1%numero2;
}

while(!salir){
    let numero1=parseInt(prompt("Ingresa el 1er Nro"));
    let numero2=parseInt(prompt("Ingresa el 2do Nro"));

    let opcion=parseInt(prompt("Elegí una opción:"+
    "1:Sumar "+
    "2:Restar "+
    "3:Dividir "+
    "4:Multiplicar "+
    "5:Porcentaje "+
    "6:SALIR"));
    
    let resultado=0;
    
    switch (opcion){
        case 1:
            resultado=sumar(numero1,numero2);
            break;
        case 2:
            resultado=restar(numero1,numero2);
            break;
        case 3:
            if(numero2==0){
                alert("No se puede dividir entre cero");
            }
            else{
                (resultado=dividir(numero1,numero2));
            }
            break;    
        case 4:
            resultado=multiplicar(numero1,numero2);
            break;
        case 5:
            resultado=porcentaje(numero1,numero2);
        break;
        case 6:
            alert("Has elegido salir");
            salir=true;
            break;
        default:
            alert("Solo numeros entre 1 y 6")
    }
    if(opcion>=1 && opcion<=2 || opcion>=4 && opcion<=5 ){
        alert("Resultado: "+resultado);
    } else if(opcion>=1 && opcion<=5 ){
        alert("El resultado es: "+resultado);
    }else{
        alert("Por favor contesta la breve encuesta");
    }

};

let puntuacion = prompt("Qué Puntaje del 1 al 10 le das a esta calculadora?}");
if(puntuacion>=7){
    alert("Me Alegro! Gracias!"),
    console.log("Aprobado");
}
else{
    alert("Uy! Lo lamento, prometo mejorar");
    console.log("Fracasito");
}





