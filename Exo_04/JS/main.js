// const squares = document.querySelectorAll(".square");
// const wrapper = document.querySelector("#wrapper")

// console.log('wrapper')
// squares.forEach(function(square) {
//     square.addEventListener('click', function() {
//         squares.forEach('clicked'function(otherSquare)
//         if (otherSquares.classList.contains('clicked')) {
//             otherSquare.classList.remove('clicked');
            
            
//         } else {
//             square.classList.add('clicked');
//             square.style.boxShadow = '0px 42px 25px -25px black';
//             square.style.borderRadius = '5%';
//             const squareBackground = window.getComputedStyle(square).backgroundColor;
//             wrapper.style.background = squareBackground;
//         })
//     });
// });

const squares = document.querySelectorAll(".square");
    const wrapper = document.getElementById("wrapper");

    squares.forEach(function(square) {
        square.addEventListener('click', function() {
            // Ajoute ou supprime la classe 'clicked' au carré actuel
            square.classList.toggle('clicked');

            if (square.classList.contains('clicked')) {
                // Si le carré a la classe 'clicked'
                square.style.boxShadow =  '0px 35px 45px -20px black';
                square.style.borderRadius = '5%';
                const squareBackground = window.getComputedStyle(square).color;
                wrapper.style.background = squareBackground;

                // Supprime la classe 'clicked', l'ombre et la bordure des autres carrés
                squares.forEach(function(otherSquare) {
                    if (otherSquare !== square) {
                        otherSquare.classList.remove('clicked');
                        otherSquare.style.boxShadow = '';
                        otherSquare.style.borderRadius = '';
                    }
                });
            } else {
                // Si le carré n'a pas la classe 'clicked'
                square.style.boxShadow = ''; // Supprime l'ombre
                square.style.borderRadius = ''; // Réinitialise la bordure arrondie
                wrapper.style.background = '#C0BFC0'; // Couleur de fond par défaut
            }
        });
    });
