const topSquare = document.querySelectorAll(".square[id^=topSquare]")
const bottomSquare = document.getElementById("bottomSquare")

topSquare.forEach(function(topSquare) {
    topSquare.addEventListener('click', function() {
        const selectedColor = window.getComputedStyle(topSquare).backgroundColor;
        bottomSquare.style.backgroundColor = selectedColor;
        
        const styles = window.getComputedStyle(topSquare)
        bottomSquare.querySelector('p').textContent = `${styles.backgroundColor}`

    })

})