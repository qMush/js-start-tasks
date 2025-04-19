const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Метод console.log используется для вывода информации в консоль.');
});

const alertElem = document.querySelector('#alert');
alertElem.addEventListener('click', () => {
    alert('Функция alert выводит сообщение в модальном окне.');
});

const promptElem = document.querySelector('#prompt');
promptElem.addEventListener('click', () => {
    alert('Функция prompt выводит окно запроса с полем для ввода.');
});
