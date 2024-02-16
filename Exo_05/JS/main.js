

var quotes = {
    "Serge Karamazov":"Barrez vous **** de mimes.",
    "George Abitbol":"Le train des injures roule sur le rail de mon indiffrerence.",
    "Hubert Bonisseur de la bath":"Ca ne prenait pas beaucoup plus de temps.",
    "Moulinier":"L'habit ne fait pas le moine, mais il fait l'agent...Même non titularisé.",
    "Orson Welles":"C'est du vol et du plagiat. j'aime pas trop les voleurs et..."

}

const quotesContainer = document.getElementById('quotes-container');

for (const [author, quote] of Object.entries(quotes)) {
    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    quoteElement.innerHTML = `
        <p>"${quote}"</p>
        <span>${author}</span>
        <i class="far fa-heart"></i>
    `;
    quotesContainer.appendChild(quoteElement);

    // Ajout d'un gestionnaire de clics pour marquer/démarquer comme favori
    quoteElement.addEventListener('click', function (quote) {
        // Empêche la propagation du clic à l'élément parent s'il y en a un
        quote.stopPropagation();

        // Toggle la classe 'clicked' pour marquer/démarquer une citation comme favorite
        quoteElement.classList.toggle('clicked');

        // Toggle la classe 'fa-heart' pour changer l'icône du cœur
        const heartIcon = quoteElement.querySelector('i');
        heartIcon.classList.toggle('far');
        heartIcon.classList.toggle('fas');
        // toggle impossible avec un style
        const currentColor = heartIcon.style.color;
        heartIcon.style.color = currentColor === 'red' ? 'black' : 'red';
    });
}