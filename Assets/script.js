const apiKey = 'a0b692553e208684ea0552c053a06561'

var searchButton = document.querySelector('#search-button')
    searchButton.addEventListener('click',function(){
        const cityName = 'Houston'
const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + apiKey

fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    const lat = data[0].lat
    const lon = data[0].lon
    searchWeather(lat,lon)
    console.log(data)
})
    })

    const searchWeather = function(lat,lon){
        const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial'
        fetch(weatherUrl).then(function(response){
            return response.json()
        }).then(function(data){
            var currentTemp = document.querySelector('#current-temp')
            currentTemp.textContent = data.list[0].main.temp
            var currentCity = document.querySelector('#current-city')
            currentCity.textContent = data.city.name
            var currentDate = document.querySelector('#current-date')
            currentDate.textContent = data.list[0].dt_txt
            //var currentEmoji = document.querySelector('#current-emoji')
            //currentEmoji.textContent = data.list[0].main
            var currentHumidity = document.querySelector('#current-humidity')
            currentHumidity.textContent = data.list[0].main.humidity
            var currentWind = document.querySelector('#current-wind')
            currentWind.textContent = data.list[0].wind.speed
            console.log(data)
            
        })
    }
