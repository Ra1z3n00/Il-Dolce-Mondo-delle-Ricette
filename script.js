// <!-- SCRIPT JS PER IL FILTRO CATEGORIE -->
        const filterBtns = document.querySelectorAll('.filter-btn');
        const recipeCards = document.querySelectorAll('.grid > a');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Rimuove la classe attiva da tutti i pulsanti e la mette a quello cliccato
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Evidenzia sia la versione mobile che desktop per sincronizzazione
                const selectedCategory = btn.getAttribute('data-category');
                document.querySelectorAll(`.filter-btn[data-category="${selectedCategory}"]`).forEach(b => b.classList.add('active'));

                // Mostra o nasconde le card in base alla categoria
                recipeCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
