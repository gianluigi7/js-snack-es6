'use strict'

const bici = [
    {
        nome: 'vincenzo',
        peso: 80,

    },
    {
        nome: 'Sipario',
        peso: 320,

    },
    {
        nome: 'Melchiorre',
        peso: 70,

    }
];





let min = bici[0].peso;



for (let i = 1; i < bici.length; i++) {

 const biciattuale = bici[i].peso;

 if (biciattuale.peso < min) {
    min = biciattuale;

    
}



}
console.log(min);
