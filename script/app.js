const APIKEY = '5c1fa78e6d9dac148c7da95ae52d4dc0';
const townNameInput = document.querySelector('form');
const searchButton = document.querySelector('.search-icon');
const temperature = document.querySelector('.weather h1');
const town = document.querySelector('.weather h2');
const humidity = document.querySelector('.humidity-value');
const windSpeed = document.querySelector('.wind-speed-value');

searchButton.addEventListener('click', weatherSearch);
window.addEventListener('keydown', (e) => e.key === 'Enter' && weatherSearch());
townNameInput.addEventListener('submit', (e) => {
    e.preventDefault();
    weatherSearch();
    townNameInput.reset();
});

async function weatherSearch() {
    const ville = document.querySelector('input').value.trim();
    if (ville) 
        await weather(ville);
    else 
        document.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=3ntbU78FF643Jbu4';
}

const weather = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            temperature.textContent = `${data.main.temp} °C`;
            town.textContent = `${data.name} : ${data.sys.country}`;
            humidity.textContent = `${data.main.humidity}%`;
            windSpeed.textContent = `${data.wind.speed} km/h`;
        } else {
            alert('Ville introuvable !');
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
};

weather('Ouagadougou'); // Ville par défaut