const form = document.querySelector('form');
const input = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log(input.value); 
    duplicateField.textContent = input.value;  
    input.value = ''; 
});
