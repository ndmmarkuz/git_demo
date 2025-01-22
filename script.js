document.querySelectorAll('.name').forEach(name => {
            name.addEventListener('click', () => {
                name.classList.toggle('enlarged');
            });
        });
