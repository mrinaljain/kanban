let addNoteBtn = document.querySelector(".add_note");
let deleteNoteBtn = document.querySelector(".delete_note");
let addNoteModal = document.querySelector(".add_note_modal");
let priorityColors = document.querySelectorAll(".priority_color");
let createNoteTextArea = document.getElementById('createNoteTextArea');
// create note
let selectedPriortyColor = 'black';

//clickevent on add note button to open add_note_modal
addNoteBtn.addEventListener('click', function () {
   addNoteModal.style.display = 'block';
});

//click event on delete button to activate delete buttton
///then click on any card to delete the card
deleteNoteBtn.addEventListener('click', function () {
   let isDeleteActive = confirm('Click on any card to delete');
   if(isDeleteActive){
      console.log("Click on any card to delete its active");
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
      selectedPriortyColor =  e.target.classList[0];
      // add active class on the one clicked
      e.target.classList.add('active');
      
   });

}

// enter event in textarea

createNoteTextArea.addEventListener('keypress', function(e){
   let keyPressed = e.key;
   let textContent = e.target.value;
   
   if(keyPressed === 'Enter'){
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
}






// click event on sorting colors header
// double click to remove all sorting

// click event on the card header to change color

// click event on the lock for editing text
// click on unlock to lock the text area
