let addNoteBtn = document.querySelector(".add_note");
let deleteNoteBtn = document.querySelector(".delete_note");
let addNoteModal = document.querySelector(".add_note_modal");
let priorityColors = document.querySelectorAll(".priority_color");
let filterColors = document.querySelectorAll(".color_filter .color");
let createNoteTextArea = document.getElementById('createNoteTextArea');
// create note
let selectedPriortyColor = 'black';
let cardsSection = document.querySelector('.cards_section');

const availableColorTags = ['black', 'blue', 'pink', 'green'];
var isDeleteActive = false;


//clickevent on add note button to open add_note_modal
addNoteBtn.addEventListener('click', function () {
   addNoteModal.style.display = 'block';
});

//*click event on delete button to activate delete buttton
deleteNoteBtn.addEventListener('click', function () {
   isDeleteActive = confirm('DO you want to start deleting CARDS ??????');
   if (isDeleteActive) {
      console.log("Click on any card to delete its active");
   } else {
      console.log("Card deleting service stopped");
   }
});


// click event on colors to select note type
for (let i = 0; i < priorityColors.length; i++) {
   priorityColors[i].addEventListener('click', function (e) {
      // remove active class from all 
      priorityColors.forEach(function (currentColor) {
         currentColor.classList.remove('active');
      })
      // set value of selectedPriortyColor
      selectedPriortyColor = e.target.classList[0];
      // add active class on the one clicked
      e.target.classList.add('active');

   });

}

//* enter event in textarea
createNoteTextArea.addEventListener('keypress', function (e) {
   let keyPressed = e.key;
   let textContent = e.target.value;

   if (keyPressed === 'Enter') {
      // create ticket function with HTML on enter function
      createTicket(textContent, selectedPriortyColor);
      // after creation close the modal as well as clear all values
      createNoteTextArea.value = '';
      addNoteModal.style.display = 'none';

   }
});

// TODO: (write a function to create and add ticket to DOM)
function createTicket(textContent, selectedPriortyColor) {
   console.log(textContent);
   console.log(selectedPriortyColor);
   let ticket_id = 'a21kjfjdk';
   // create complete HTML with content  and append it to the card container
   // Create a new div element
   const cardHTML = document.createElement("div");
   // Add class and data-genre attributes
   cardHTML.classList.add('card');
   cardHTML.setAttribute('data-genre', selectedPriortyColor);
   cardHTML.innerHTML = `
      <div class="card_color_tag ${selectedPriortyColor}"></div>
      <div class="card_header">
         <h4>${ticket_id}</h4>
      </div>
      <div class="card_title"></div>
      <div class="card_content" contenteditable="false">
         ${textContent}
         <span class="edit">
            <i class="fa-solid fa-lock"></i>
            <i class="fa-solid fa-lock-open">
            </i>
         </span>
      </div>`;
   
   // Append the new div element to the container
   cardsSection.appendChild(cardHTML);
}


//* click events on sorting colors header

for (let i = 0; i < filterColors.length; i++) {
  
   //* double click to remove all sorting
   filterColors[i].addEventListener('dblclick',function(e){
      // loop on  all cards 
      // display block on all cards
      // selecting cards here as they are created dynamiclly
      let allCards = document.querySelectorAll(".cards_section .card");
      console.log('Double Click');
      for (let i = 0; i < allCards.length; i++) {
         allCards[i].style.display = 'block';
      }
   });
   

   filterColors[i].addEventListener('click', function(e){
      // selecting cards here as they are created dynamiclly
      let allCards = document.querySelectorAll(".cards_section .card");
      console.log(allCards);
      // find the color which is clicked
      const colorClicked = e.target.classList[0];
      console.log(colorClicked);
      // for loop on all the cards 
      for (let i = 0; i < allCards.length; i++) {
         let currentCardColor = allCards[i].getAttribute('data-genre');
         // display  block if data clor matches
         if (currentCardColor === colorClicked){
            allCards[i].style.display = 'block';
         }
        // display none if data color doesnot match);
        else{
         allCards[i].style.display = 'none';
        }
         
      }
   });
   
}





//* clickhandeler on the entire cards section
cardsSection.addEventListener('click', function (e) {
   let currentClickedElement = e.target;
   let currentClickedElementClassList = currentClickedElement.classList;
   console.log('current Clicked Element');
   console.log(currentClickedElement);
   console.log(currentClickedElementClassList);


   //* Cick on any card to delete the card if(deletecard is active)
   if (isDeleteActive) {
      currentClickedElement.closest('.card').remove();
   }

   //* click event on the card header to change color
   if (currentClickedElementClassList.contains('card_color_tag')) {
      // TODO:(@mrinaljain) create a function to replace class (current class) for better performance
      let currentColor = currentClickedElement.classList[1];
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * availableColorTags.length);
      // Get the random value from the array
      const colorToBeReplaced = availableColorTags[randomIndex];
      // implement color switching on click 
      // TODO :  also replace date-genre attribute for filter
      currentClickedElement.classList.replace(currentColor, colorToBeReplaced);
   }

   //* click event on the lock for editing text
   if (currentClickedElementClassList.contains('fa-lock')) {
      console.log('edit card clicked');
      // find the nearest div with content
      let nearstContent = currentClickedElement.closest('.card_content')
      // make the parent div editale
      nearstContent.setAttribute('contenteditable', 'true');
      // make edit invisible
      currentClickedElement.style.display = 'none';
      // make editinglock visible 
      nearstContent.querySelector('.fa-lock-open').style.display = 'block'
   }
   //* click on unlock to lock the text area
   if (currentClickedElementClassList.contains('fa-lock-open')) {
      console.log('lock editing card clicked');
      // find the nearest div with content
      let nearstContent = currentClickedElement.closest('.card_content')
      // make the parent div not editable
      nearstContent.setAttribute('contenteditable', 'false');
      // TODO(@mrinaljain): save the content in memory 
      // make locked invisible
      currentClickedElement.style.display = 'none';
      // make editing visible 
      nearstContent.querySelector('.fa-lock').style.display = 'block'
   }
});

createTicket('ada dadadada' ,'blue');
createTicket('ada dadadada' ,'green');
createTicket('ada dadadada' ,'black');
createTicket('ada dadadada' ,'pink');
createTicket('ada dadadada' ,'green');
createTicket('ada dadadada' ,'blue');
createTicket('ada dadadada' ,'blue');

