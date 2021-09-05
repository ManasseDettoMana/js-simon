let vettoreNumeri = [];

for(let i = 0; i<5; i++){
    vettoreNumeri.push(NumeriRandom(1,100));
}
console.log(vettoreNumeri);


alert(vettoreNumeri);

setTimeout(verificaNumeri, 3000, vettoreNumeri);



function verificaNumeri(vettoreNumeri){
    
    let numeriSbagliati=[];

    for(let i = 0; i<vettoreNumeri.length;i++){
        let app=parseInt(prompt("Inserisci uno dei numeri"));

        if(isNaN(app)){
            i--;
            continue;
        }
        if(!vettoreNumeri.includes(app)){
            numeriSbagliati.push(app);
        }
    }
    console.log(numeriSbagliati);
}

function NumeriRandom(min, max){
    return Math.floor(Math.random() * max) + min;
}