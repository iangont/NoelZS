// Compte à rebours jusqu'à Noël
function countdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 décembre
    const difference = christmas - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days;
}

// Appeler la fonction immédiatement
countdown();

// Mettre à jour le compte à rebours toutes les heures
setInterval(countdown, 1000 * 60 * 60);
