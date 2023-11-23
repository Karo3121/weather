// c777404b9293cd59d625cc8b63b44eaa



let weather = document.getElementById("weather")
let btn = document.getElementById("btn")
let APIKey = `c777404b9293cd59d625cc8b63b44eaa`



btn.addEventListener( "click" , () =>{


    let inp = document.getElementById("inp").value
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=${APIKey}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        


        
        if (data.cod == "404") {
            weather.style = `
                opacity:0;
            `
            alert("incorect city")
        }else{
        weather.style = `
            opacity:1;
    
        `
        
        let mainImg = document.getElementById("mainImg")
            mainImg.setAttribute("src", `./png/${data.weather[0].main}.png` )
        let temp = document.getElementById("tmp")
            temp.innerHTML = data.main.temp
        let main = document.getElementById("main")
            main.innerHTML = data.weather[0].main   
        let humidity = document.getElementById("humidity")
            humidity.innerHTML = data.main.humidity + " %"
            humidity.style = `
                font-size: 18px;
        
             `
        let windSpeed = document.getElementById("windSpeed")
            windSpeed.innerHTML = data.wind.speed + " km/h"
            windSpeed.style = `
                font-size: 18px;
            
            `












}});



})



































































































