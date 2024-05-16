'use strict'

const bici = [
    {
        nome: 'vincenzo',
        peso: 20,

    },
    {
        nome: 'Sipario',
        peso: 30,

    },
    {
        nome: 'Melchiorre',
        peso: 90,

    }
];





let min = bici[0].peso;
console.log(min);

let i = 0;


do {

if (min > bici[i].peso) {

    min++;
    i=0;
    
    
}else {
    min = bici[i].peso;
}




 i++;
} while(min < bici[i][peso]);

console.log(min);