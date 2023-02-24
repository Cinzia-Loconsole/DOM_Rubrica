let cardsWrapper = document.querySelector('#cardsWrapper');

let mostraRubrica = document.querySelector('#mostraRubrica');

let aggiungiContatto = document.querySelector('#addcont');

let rimuoviContatto = document.querySelector('#remcont');

let cercaContatto = document.querySelector('#cercacont');

let nameInput = document.querySelector('#nameInput');

let numberInput = document.querySelector('#numberInput');


let check = false;

let rubrica = {
    contatti:
    [
        {nome:'Cinzia' , numero: 12345678},
        {nome:'Carmine' , numero: 33399900},
        {nome:'Adriano' , numero: 89181928},
        {nome:'Antonio' , numero: 33333333},
        {nome:'William' , numero: 282923823},
    ],

showContacts : function (){

    cardsWrapper.innerHTML =``; 
    
    console.log('test');

    this.contatti.forEach( (contatto) =>{

        let div = document.createElement('div');
        div.classList.add('col-12', 'my-3');

        div.innerHTML = ` 
            
                        <div class="card-custom">
                            <p class="m-0">${contatto.nome}</p>
                            <p class="m-0">${contatto.numero}</p>
                            <i class="fa-solid fa-trash icon"></i>
                        </div>

        `

        cardsWrapper.appendChild(div);

    })

    // CATTURO LE ICONE CHE VENGONO CREATE IN QUESTA FUNZIONE
    let icons = document.querySelectorAll('.icon');

    icons.forEach ((icona , i)=>{

        icona.addEventListener('click', () =>{

            let name = this.contatti[i].nome;

            this.removeContact(name); 

            // this.showContacts();

        })

    })


  
    },

    addContact : function (newName, newNumber){

        this.contatti.push ({nome: newName , numero: newNumber});

        rubrica.showContacts();

        nameInput.value = '';

        numberInput.value = '';

    },


    // FUNZIONE RIMUOVI CONTATTO 
    removeContact : function (removedName){

        let names = this.contatti.map((contatto)=> contatto.nome.toLowerCase());

        let index = names.indexOf(removedName.toLowerCase());

        if (index > -1){

            this.contatti.splice(index , 1);

            this.showContacts();

        }else{

            alert('contatto non presente in rubrica');

            mostraRubrica.innerHTML = "Mostra Rubrica";

        }

    }
    


}

// EVENTO MOSTRA RUBRICA
mostraRubrica.addEventListener('click',()=>{

    if (check == false){
        
        rubrica.showContacts();

        check = true;

        mostraRubrica.innerHTML = 'Nascondi Rubrica';

    } else {

        cardsWrapper.innerHTML = '';

        check = false;

        mostraRubrica.innerHTML = 'Mostra Rubrica';

    }

})


// EVENTO AGGIUNGI CONTATTO
aggiungiContatto.addEventListener('click', ()=>{

    if(nameInput.value != '' && numberInput.value != ''){
        
        check = true;
        
        rubrica.addContact (nameInput.value , numberInput.value);

        rubrica.showContacts();

        mostraRubrica.innerHTML = "Nascondi Rubrica";

     } else {
        
        check = false;

        alert('Attenzione, inserisci correttamente i campi');

        mostraRubrica.innerHTML = 'Mostra Rubrica';

        

     }

 })

//  EVENTO RIMUOVI CONTATTO

rimuoviContatto.addEventListener ('click' , ()=>{

    if(nameInput.value != ''){

    check = true;

    rubrica.removeContact(nameInput.value);

    mostraRubrica.innerHTML = "Nascondi Rubrica";

    nameInput.value = '';

    }else{

        alert('contatto non presente in rubrica');

        mostraRubrica.innerHtml = "Mostra Rubrica";

        check = false;

    }

    
})