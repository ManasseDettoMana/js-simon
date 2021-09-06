let vettoreNumeri = [];

while(vettoreNumeri.length < 5){
    let app=NumeriRandom(1,100);
    if(!vettoreNumeri.includes(app)){
        vettoreNumeri.push(app);
    }
}
console.log(vettoreNumeri);


alert(vettoreNumeri);

setTimeout(verificaNumeri, 30000, vettoreNumeri);



let i=1;
var clock= setInterval(function(){   //stampa a video del timer
    document.getElementById("timer").textContent = i;
    i++;
    if(i>30){
        clearInterval(clock);
    }
    
}, 999);



function verificaNumeri(vettoreNumeri){     //verifica dei numeri
    
    let numeriIndovinati=[];

    for(let i = 0; i<vettoreNumeri.length;i++){
        let app=parseInt(prompt("Inserisci uno dei numeri"));

        if(isNaN(app)){     //in caso non fosse un numero quello inserito si torna indietro con l'iterazione e si ripete
            i--;
            continue;
        }
        if(vettoreNumeri.includes(app)){      //se il numero inserito si trova tra i numeri randomici 
            numeriIndovinati.push(app);       //lo si inserisce nel vettore dei numeri indovinati
        }
    }

    if(numeriIndovinati.length>0){            //inserimento nell'html dei numeri indovinati
        document.getElementById("numeri_sbagliati").innerHTML += '<h2> Numeri indovinati: </h2>';
        document.getElementById("numeri_sbagliati").innerHTML += '<span>' + numeriIndovinati + '</span>';
    }
    console.log(numeriIndovinati);
}

function NumeriRandom(min, max){
    return Math.floor(Math.random() * max) + min;
}