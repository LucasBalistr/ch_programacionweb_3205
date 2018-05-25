//1er forma de hacer el ejercicio
/*
var diaSemana = prompt("Introduzca un día de la semana, por favor:");
switch (diaSemana) {
    default:
        alert("Usted NO ingresó un día de la semana");
        break;
    case "Sábado":
    case "Domingo":
        alert("Usted ingresó un día del fin de semana");
        break;
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        alert("Usted ingresó un día de la semana");
        break;
}
*/

//2da forma de hacer el ejercicio
var dias = ["lunes","martes","miercoles","miércoles","jueves","viernes","sabado","sábado","domingo"];
for (var i=0)
var diaSemanaVector = prompt("Introduzca un día de la semana, por favor:");
diaSemanaVector = diaSemanaVector.toLowerCase();

switch (dias.indexOf(diaSemanaVector)) {
    default:
        alert("Usted NO ingresó un día de la semana");
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("Usted ingresó un día de la semana");
        break;
    case 6:
    case 7:
    case 8:
        alert("Usted ingresó un día del fin de semana");
        break;
}