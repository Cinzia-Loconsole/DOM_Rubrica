let cardsWrapper = document.querySelector('#cardsWrapper');

let mostraRubrica = document.querySelector('#mostraRubrica');

let check = false;

let rubrica = {
    contatti:
    [
        { nome : 'Cinzia' , numero: 12345678},
        { nome : 'Carmine', numero: 33399900},
        { nome: 'Adriano', numero: 89181928},
        { nome: 'Antonio', numero: 33333333},
        { nome: 'William', numero: 282923823},
    ],

showContacts : function (){

    cardsWrapper.innerHtml =``;   

    this.contatti.forEach( (contatto) =>{

        let div = document.createElement('div');
        div.classList.add('col-12', 'my-3');

        div.innerHTML = ` 
            
                        <div class="card-custom">
                        <p class="m-0">${contatto.nome}</p>
                        <p class="m-0">${contatto.numero}</p>
                        <i class="fa-solid fa-trash"></i>
                        </div>

        `

        cardsWrapper.appendChild(div);

    })

  
    }
    


}

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


// rubrica.showContact();
// console.log(rubrica.showContact());
