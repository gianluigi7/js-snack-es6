'use strict'

const squadre = [
    {
        nome: 'juventus',
        falliSubiti: 0,
        puntiFatti: 0,

    },
    {
        nome: 'salernitana',
        falliSubiti: 0,
        puntiFatti: 0,

    },
    {
        nome: 'angri',
        falliSubiti: 0,
        puntiFatti: 0,

    }
];


for (let i = 0; i < squadre.length; i++) {
    
    
    const team = squadre[i];
    
    
    team.falliSubiti = Math.floor(Math.random() *100);
    team.puntiFatti = Math.floor(Math.random() *100);
    

    
    
}

for (let key in squadre) {
    console.log(squadre[key]);
}

const newArray = squadre.map((element, index, array) => {
    
    return {
        nome: element.nome,
        falliSubiti: Math.floor(Math.random() *100),
        
    }
    
    
})
console.log(newArray);