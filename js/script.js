
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.

//PASSAGGI
//Creo l' array di oggetti con nome, ruolo e foto di ogni membro del team

const ourTeamArray = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: '../img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: '../img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: '../img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: '../img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: '../img/barbara-ramos-graphic-designer.jpg'
    },
];

//Imposto il ciclo for per creare una card per ogni componente del team
const TeamContainer = document.querySelector('.team-container');

// Per ogni classe nell'array 
// stampo una card nel dom
for(let i = 0; i < ourTeamArray.length; i++) {
    const thisTeam = ourTeamArray[i];

    //template da inserire nel dom per formare le card 
    const teamCards = `
    <div class="team-card">

              <div class="card-image">
              <img
                src="${thisTeam.image}"
                alt="${thisTeam.name}"
              />
            </div>

            <div class="card-text">
              <h3>${thisTeam.name}</h3>
              <p>${thisTeam.role}</p>
            </div>
          
          </div>
    `;

    // concatenarlo a teamContainer
    TeamContainer.innerHTML += teamCards;
}
