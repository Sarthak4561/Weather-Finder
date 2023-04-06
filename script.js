console.log('file running');

let searchBtn = document.querySelector('#search-btn')
let placename = document.getElementById('place-name');

searchBtn.addEventListener("click", async()=>{
    let placeName = placename.value;
    console.log(placeName);

    let finalUrl = `http://api.weatherapi.com/v1/current.json?key=989d51d738fa4184b6342103230304&q=${placeName}&aqi=yes`;
    try {
        let response = await fetch(finalUrl);
        
        let place_data = await response.json();
        console.log(place_data);
        console.log(place_data.current.feelslike_c);

        console.log(place_data.current.condition.icon);
        const data = document.querySelector('.result');



        let resultDiv = document.querySelector('.result');
        let element1 = document.createElement("div");
        element1.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
        document.resultDiv.appendChild(element1);




    } catch (error) {
        if(placeName.length == 0){
            result.innerHTML = `<h3>The input field is empty</h3>`;
        }

        else{
            result.innerHTML = `<h3>Please enter a valid country</h3>`;
        }
    }   
});