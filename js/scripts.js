// // Verificare se index è multiplo di 3. Se lo è, stampa FIZZ, altrimenti se è multiplo di 5 stampa BUZZ
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



for (let index = 0; index < 100; index++) {
    
    console.log("index" + (index + 1 + 1));

    if (index % 3 == 0) {
       
        
        console.log(index + "siamo multipli di 3");
    }
   

     else if ( index % 5 == 0) {

        console.log(index + "siamo multipli di 5");
    }


    else if ( index % 15 == 0) {      //CI STO ANCORA RIFLETTENDO

        console.log("SIAMO ROSSI");
    }

    else  {

        console.log("CIAO")
    }


    
    
}






