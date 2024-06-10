const buttons = document.querySelectorAll('.plan button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You selected ' + button.parentElement.querySelector('h2').innerText + ' plan');
    });
});
