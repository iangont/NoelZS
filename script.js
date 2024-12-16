// Compte à rebours simplifié
function countdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 décembre
    const days = Math.ceil((christmas - now) / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days;
}

// Appeler la fonction immédiatement
countdown();

// Mettre à jour le compte à rebours toutes les heures
setInterval(countdown, 1000 * 60 * 60);
