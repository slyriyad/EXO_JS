const squares = document.querySelectorAll(".square");

    squares.forEach(function(square) {
        square.addEventListener('click', function() {
            if (square.classList.contains('clicked')) {
                square.classList.remove('clicked');
                square.style.transform = 'scale(1) rotate(0deg)';
                square.style.background = '#8DAE87'
                square.style.color = ''
            } else {
                square.classList.add('clicked');
                square.style.transform = 'scale(0.9) rotate(360deg)';
                square.style.background = '#AA726D'
                square.style.color = '#8C8BBF'
            }
        });
    });