document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('rotate-up');
        button.classList.toggle('rotate-down');
        const codeBlock = button.nextElementSibling;
        codeBlock.classList.toggle('hidden');
    });
});