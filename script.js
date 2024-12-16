// Compte à rebours jusqu'à Noël
function countdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 décembre
    const difference = christmas - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days;
}

countdown();
setInterval(countdown, 1000 * 60 * 60); // Mettre à jour toutes les heures

// Flocons de neige
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.textContent = '❄';
    document.getElementById('snow').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 500);