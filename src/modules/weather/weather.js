const apiKey = '8f74f27f57f990f203e46d42d77bc30e';
const form = document.getElementById('change-location');
const cityInput = document.getElementById('form-control')

async function getWeather() {
    const cityValue = cityInput.value.trim()
    const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric&lang=uz`)
    const data = await getData.json()
    const getTemp = Math.round(data.main.temp)
    document.querySelector('.return').innerHTML = `
        <h1 class='element'>${cityValue}da harorat ${getTemp}°C kuningiz hayrli o'tsin</h1>
    `
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // MUHIM: Sahifa yangilanib ketishini to'xtatadi
    getWeather();       // Mana endi funksiyangiz ishga tushadi!
});