const square = document.querySelector(".square");

// const styles = window.getComputedStyle(square)

if (square) {
    const styles = window.getComputedStyle(square)
    
    // Obtenir les classes de l'élément
    const classes = square.classList;

    // Convertir les classes en une chaîne pour affichage
    const classString = Array.from(classes).join(', ');

    const classe = classString




const messageInfo = `
class : ${classe}
backround : ${styles.background}
color: ${styles.color};
height: ${styles.height};
width: ${styles.width};
display: ${styles.display};` 

function alertDialogue(){
    alert(messageInfo)
}
}
square.addEventListener('click',alertDialogue)