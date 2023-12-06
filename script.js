document.addEventListener('DOMContentLoaded', function () { // Attend que le DOM soit chargé
    alert("Bienvenue sur mon site de pagination !,\n n'oubliez pas d'activer le son 😉"); // Affiche une alerte
    const container = document.getElementById('container'); // Récupère le conteneur de la pagination
    const paginationContainer = document.getElementById('pagination'); // Récupère le conteneur de la pagination
    const buttons = paginationContainer.getElementsByClassName('btn'); // Récupère tous les boutons de la pagination
    const firstButton = document.getElementById('page1'); // Récupère le bouton First
    const lastbutton = document.getElementById('page5'); // Récupère le bouton Last
    const totalPages = buttons.length - 4; // Total de pages sans les boutons First, Prev, Next, Last
    let currentPage = 1; // Page courante
    let liste = [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yszV2o-cIw-ZQxdp_I_B5Qtm1iUq_kqrYw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfE-0WetbWQ3vbRh73XWw6RPk96h20lvK9dg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjVFes7LTTJZtHkbeeo-PsqJX0wEGqFAGqA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2dfuqDCEjip2pg1HsMi0nxsHx3ygB5rp0A&usqp=CAU"
    ]; // Liste d'image pour le background de la pagination
    // liste d'audio pour le background de la pagination
    let listeAudio = [
    "./audio/meme 1.mp3",
    "./audio/meme 2.mp3",
    "./audio/meme 3.mp3",
    "./audio/meme 4.mp3",
    "./audio/Vidéo sans titre ‐ Réalisée avec Clipchamp.mp3",
    ];
    function updateButtons() { // Met à jour les boutons de la pagination
        for (let i = 2; i <= totalPages + 1; i++) { // Boucle sur les boutons de page
            const button = buttons[i]; // Récupère le bouton de page
            // si le la page actuelle est la dernière page
            if (i === currentPage + 1) { // Si le bouton correspond à la page courante
                button.classList.add('active'); // Ajoute la classe active
                container.style.backgroundImage = "url(" + liste[i - 2] + ")"; // Change le background de la pagination
                let audio = new Audio(listeAudio[i - 2]); // Change l'audio de la pagination
                audio.play(); // Joue l'audio
            } else { // Sinon
                button.classList.remove('active'); // Retire la classe active
            } // Fin si

            if (currentPage === 1){
                buttons[0].classList.add('disabled'); // Ajoute la classe disabled
                buttons[1].classList.add('disabled'); // Ajoute la classe disabled
            } else {
                buttons[0].classList.remove('disabled'); // Retire la classe disabled
                buttons[1].classList.remove('disabled'); // Retire la classe disabled
            }

            if (currentPage === totalPages){
                buttons[totalPages + 2].classList.add('disabled'); // Ajoute la classe disabled
                buttons[totalPages + 3].classList.add('disabled'); // Ajoute la classe disabled
            } else {
                buttons[totalPages + 2].classList.remove('disabled'); // Retire la classe disabled
                buttons[totalPages + 3].classList.remove('disabled'); // Retire la classe disabled
            }
        } // Fin boucle
    } // Fin fonction

    function goToPage(page) { // Change de page
        currentPage = Math.min(Math.max(page, 1), totalPages); // Définit la page courante
        updateButtons(); // Met à jour les boutons de la pagination
    } // Fin fonction

    function goToNextPage() { // Passe à la page suivante
        goToPage(currentPage + 1); // Passe à la page suivante
    } // Fin fonction

    function goToPrevPage() { // Passe à la page précédente
        goToPage(currentPage - 1); // Passe à la page précédente
    } // Fin fonction

    function goToFirstPage() { // Passe à la première page
        goToPage(1); // Passe à la première page
    } // Fin fonction

    function goToLastPage() { // Passe à la dernière page
        goToPage(totalPages); // Passe à la dernière page
    } // Fin fonction


    // Ajoutez les écouteurs d'événements aux boutons
    document.getElementById('first').addEventListener('click', goToFirstPage);  // Ajoutez les écouteurs d'événements aux boutons de page
    document.getElementById('prev').addEventListener('click', goToPrevPage); // Ajoutez les écouteurs d'événements aux boutons de page
    document.getElementById('next').addEventListener('click', goToNextPage); // Ajoutez les écouteurs d'événements aux boutons de page
    document.getElementById('last').addEventListener('click', goToLastPage); // Ajoutez les écouteurs d'événements aux boutons de page

    // Ajoutez les écouteurs d'événements aux boutons de page
    for (let i = 1; i <= totalPages; i++) { // Boucle sur les boutons de page
        const button = buttons[i + 1]; // Récupère le bouton de page
        button.addEventListener('click', function () { // Ajoute un écouteur d'événement au clic
            goToPage(i); // Passe à la page correspondante
        }); // Fin écouteur d'événement
    } // Fin boucle

    // Initialise la pagination à la première page
    updateButtons(); // Met à jour les boutons de la pagination
}); // Fin écouteur d'événement
