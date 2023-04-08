console.log('file running');

let searchBtn = document.querySelector('#search-btn')
let placename = document.getElementById('place-name');

searchBtn.addEventListener("click", async()=>{
    let placeName = placename.value;
    console.log(placeName);

    let finalUrl = `http://api.weatherapi.com/v1/forecast.json?key=989d51d738fa4184b6342103230304&q=${placeName}&days=5&aqi=yes&alerts=no`;
    // http://api.weatherapi.com/v1/forecast.json?key=989d51d738fa4184b6342103230304&q=${placeName}&days=5&aqi=yes&alerts=no
    try {
        let response = await fetch(finalUrl);
        
        let place_data = await response.json();
        console.log(place_data);
        console.log(place_data.current.feelslike_c);
        console.log(place_data.current.condition.icon);

        const conditionPlace = place_data.current.condition.text;
        
        const placeArea = place_data.location.name;
        const placeRegion = place_data.location.region;
        const placeCountry = place_data.location.country;
        

        console.log(conditionPlace);
        // const heading1 = document.createElement("h1");
        // heading1.innerHTML = placeArea;
        
        // const element = document.getElementsByClassName('current-location') 
        // element.appendChild(heading1);

        dataManipulation(place_data);

    } catch (error) {
        if(placeName.length == 0){
            placeName.innerHTML = `<h3>The input field is empty</h3>`;
        }

        else{
            placeName.innerHTML = `<h3>Please enter a valid country</h3>`;
        }
    }
});

function dataManipulation(place_data) {
    

    let heading1 = document.querySelector('.current-location');

    let current_status = document.createElement('h1');
    current_status.innerHTML = place_data.current.condition.text;
    current_status.className = 'current-condition';
    heading1.appendChild(current_status);

    let newH = document.createElement('p');
    newH.innerHTML= place_data.location.name;
    newH.className = 'place-name';
    heading1.appendChild(newH);

    let time = document.createElement('p');
    time.innerHTML = place_data.location.localtime;
    time.className = 'time';
    heading1.appendChild(time);

    let temperature = document.createElement('h1');
    temperature.innerHTML = place_data.current.temp_c + 'C';
    temperature.className = 'temperature';
    heading1.appendChild(temperature);

    let heading2 = document.querySelector('.current-forecast');
    let newP1 = document.createElement('p')
    newP1.innerHTML = 'Feels Like';
    heading2.appendChild(newP1);

    let feelsLike = document.createElement('h2');
    feelsLike.innerHTML = place_data.current.feelslike_c + 'C';
    feelsLike.className = 'feels-like';
    heading2.appendChild(feelsLike);

    let newP2 = document.createElement('p')
    newP2.innerHTML = 'Humidity';
    heading2.appendChild(newP2);

    let humidity = document.createElement('h2');
    humidity.innerHTML = place_data.current.humidity + '%';
    humidity.className = 'humidity';
    heading2.appendChild(humidity);
    
    let newP3 = document.createElement('p')
    newP3.innerHTML = 'Chances of rain';
    heading2.appendChild(newP3);

    let rainChance = document.createElement('h2');
    humidity.innerHTML = place_data.current.humidity + '%';
    humidity.className = 'rain-chance';
    heading2.appendChild(humidity);

    let newP4 = document.createElement('p')
    newP4.innerHTML = 'Wind Speed';
    heading2.appendChild(newP4);

    let windSpeed = document.createElement('h2');
    windSpeed.innerHTML = place_data.current.wind_kph + 'KMPH';
    windSpeed.className = 'wind-index';
    heading2.appendChild(windSpeed);

    let newP5 = document.createElement('p')
    newP5.innerHTML = 'UV Index';
    heading2.appendChild(newP5);

    let uvIndex = document.createElement('h2');
    uvIndex.innerHTML = place_data.current.uv;
    uvIndex.className = 'uv-index';
    heading2.appendChild(uvIndex);


    //day 0
    let section2 = document.querySelector('.day0');

    let date1 = document.createElement('p');
    date1.innerHTML=place_data.forecast.forecastday[0].date
    section2.appendChild(date1);

    let maxTemp1 = document.createElement('h3');
    maxTemp1.innerHTML = place_data.forecast.forecastday[0].day.maxtemp_c;
    maxTemp1.className = 'max-temp';
    section2.appendChild(maxTemp1);

    let minTemp1 = document.createElement('p');
    minTemp1.innerHTML = place_data.forecast.forecastday[0].day.mintemp_c;
    minTemp1.className = 'min-temp';
    section2.appendChild(minTemp1);

    let forecast1 = document.createElement('h5');
    forecast1.innerHTML = place_data.forecast.forecastday[0].day.condition.text;
    forecast1.className = 'forecast';
    section2.appendChild(forecast1);

    //day1
    let section3 = document.querySelector('.day1');

    let date2 = document.createElement('p');
    date2.innerHTML=place_data.forecast.forecastday[1].date
    section3.appendChild(date2);

    let maxTemp2 = document.createElement('h3');
    maxTemp2.innerHTML = place_data.forecast.forecastday[1].day.maxtemp_c;
    maxTemp2.className = 'max-temp';
    section3.appendChild(maxTemp2);

    let minTemp2 = document.createElement('p');
    minTemp2.innerHTML = place_data.forecast.forecastday[1].day.mintemp_c;
    minTemp2.className = 'min-temp';
    section3.appendChild(minTemp2);

    let forecast2 = document.createElement('h5');
    forecast2.innerHTML = place_data.forecast.forecastday[1].day.condition.text;
    forecast2.className = 'forecast';
    section3.appendChild(forecast2);


    //day2
    let section4 = document.querySelector('.day2');

    let date3 = document.createElement('p');
    date3.innerHTML=place_data.forecast.forecastday[2].date
    section4.appendChild(date3);

    let maxTemp3 = document.createElement('h3');
    maxTemp3.innerHTML = place_data.forecast.forecastday[2].day.maxtemp_c;
    maxTemp3.className = 'max-temp';
    section4.appendChild(maxTemp3);

    let minTemp3 = document.createElement('p');
    minTemp3.innerHTML = place_data.forecast.forecastday[2].day.mintemp_c;
    minTemp3.className = 'min-temp';
    section4.appendChild(minTemp3);

    let forecast3 = document.createElement('h5');
    forecast3.innerHTML = place_data.forecast.forecastday[2].day.condition.text;
    forecast3.className = 'forecast';
    section4.appendChild(forecast3);

    //day3
    let section5 = document.querySelector('.day3');

    let date4 = document.createElement('p');
    date4.innerHTML=place_data.forecast.forecastday[3].date
    section5.appendChild(date4);

    let maxTemp4 = document.createElement('h3');
    maxTemp4.innerHTML = place_data.forecast.forecastday[3].day.maxtemp_c;
    maxTemp4.className = 'max-temp';
    section5.appendChild(maxTemp4);

    let minTemp4 = document.createElement('p');
    minTemp4.innerHTML = place_data.forecast.forecastday[3].day.mintemp_c;
    minTemp4.className = 'min-temp';
    section5.appendChild(minTemp4);

    let forecast4 = document.createElement('h5');
    forecast4.innerHTML = place_data.forecast.forecastday[3].day.condition.text;
    forecast4.className = 'forecast';
    section5.appendChild(forecast4);

    //day3
    let section6 = document.querySelector('.day4');

    let date5 = document.createElement('p');
    date5.innerHTML=place_data.forecast.forecastday[4].date
    section6.appendChild(date5);

    let maxTemp5 = document.createElement('h3');
    maxTemp5.innerHTML = place_data.forecast.forecastday[4].day.maxtemp_c;
    maxTemp5.className = 'max-temp';
    section6.appendChild(maxTemp5);

    let minTemp5 = document.createElement('p');
    minTemp5.innerHTML = place_data.forecast.forecastday[4].day.mintemp_c;
    minTemp5.className = 'min-temp';
    section6.appendChild(minTemp5);

    let forecast5 = document.createElement('h5');
    forecast5.innerHTML = place_data.forecast.forecastday[4].day.condition.text;
    forecast5.className = 'forecast';
    section6.appendChild(forecast5);
}
