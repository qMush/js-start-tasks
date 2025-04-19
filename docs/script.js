const userText = prompt('Введите текст');
const userTextField = document.querySelector('#userTextField');
userTextField.textContent = userText;
console.log('Текст в блоке с id userTextField изменён на', userText);