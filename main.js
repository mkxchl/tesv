document.getElementById('submitButton').addEventListener('click', function() {
    const commandInput = document.getElementById('commandInput').value;
    const menu = document.getElementById('menu');

    if (commandInput.trim() === '/menu') {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});