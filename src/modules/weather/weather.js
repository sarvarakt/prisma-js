const changeLocation = document.getElementById('change-location')
const KEY = `8f74f27f57f990f203e46d42d77bc30e`;

const getData = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather`;
    const query = `?q=${city}&units=metric&appid=${KEY}`;

    const req = await fetch(base + query);
    const data = await req.json();

    return data
}

const getWeather = async (city) => {
    const data = await getData(city)
    console.log(data)
}

changeLocation.addEventListener("submit", (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName)
})





