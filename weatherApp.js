

async function getWeather(city) {

    try {
        let fetchItem = await fetch('https://mocki.io/v1/0284e71-d376-4c46-b1fe-1a22e1b89a0f') 

        if (!fetchItem.ok) {
            throw new Error("Whoops")
        }

        let response = await fetchItem.json();
        let cities = response.cities.find(matchCity => matchCity.name == city)

        return cities;
    } catch {

        throw new Error("Somethis went wrong")
    }

}

async function displayWeather(city) {
    let cityWeather = await getWeather(city)
    console.log(cityWeather.weather);
}

displayWeather("London");

