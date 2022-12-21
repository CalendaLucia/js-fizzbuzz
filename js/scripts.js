// // Verificare se index è multiplo di 3. Se lo è, stampa FIZZ, altrimenti se è multiplo di 5 stampa BUZZ
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”





for (let index = 1; index <= 100; index++) {
    

    
    if ( (index % 3 == 0) && (index % 5 == 0) ) {  

        const newDiv = document.createElement('div');
        newDiv.innerHTML = "Fizzbuz";
        newDiv.className = `box box-${index}`;
        container.append(newDiv);
        newDiv.style.backgroundColor = "lawgreen";
        const color = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];
        
        
    }

    else if (index % 3 == 0) {   
        console.log('Fizz');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = "Fizz";
        newDiv.className = `box box-${index}`;
        container.append(newDiv);
        newDiv.style.backgroundColor = "aqua";
    
    }

    else if (index % 5 == 0) { 
        console.log('Buz');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = "Buz";
        newDiv.className = `box box-${index}`;
        container.append(newDiv);
        newDiv.style.backgroundColor = "darkcyan";
    
    }

    else {    
        console.log(index);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `${index}`;
        newDiv.className = `box box-${index}`;
        container.append(newDiv);
        newDiv.style.backgroundColor = "burlywood";
    
    }


    //AGGIUNTA ELEMENTI NEL DOM

  

}





