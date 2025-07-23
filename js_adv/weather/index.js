let api = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
let key = "0be5cefa77367d7fea0e9652c1cc9677";


let city = document.getElementById("city")
let main = document.getElementById("main")



// appid={e83d7262935976730d9839a95b53403d}
async function any(){
    try {
        let res = await fetch(`${api}&appid=${key}&q=${city.value}`)
        let wdata = await res.json()
        console.log(wdata)
        display (wdata)
    } catch (error) {
        console.log("error");
        
    }
}
async function any1(){
    try {
        let res = await fetch(`${api}&appid=${key}&q=${city.value}`)
        let wdata = await res.json()
        console.log(wdata)
        display1 (wdata)
    } catch (error) {
        console.log("error");
        
    }
}
function display1({name,main:{temp,pressure,humidity},coord:{lat,lon},weather:[{description}],wind:{speed}}){
    main.innerHTML = "";
   let table = document.createElement("table")
   let thead = document.createElement("thead")
   let tr0 = document.createElement("tr")
   let th1 = document.createElement("th")
   th1.innerText = "City"
   let th2 = document.createElement("th")
   th2.innerText = "Weather"
   let th3 = document.createElement("th")
   th3.innerText = "Forecast"
   th2.innerText = "Weather"
   let th4 = document.createElement("th")
   th4.innerText = "Coordinates"
   
    tr0.append(th1,th2,th3,th4)
    thead.append(tr0);


    let tbody = document.createElement("tbody")
    let tr1 = document.createElement("tr")
    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = `Temp: ${temp} °C\n Pressure: ${pressure} mb \n Humidity: ${humidity} %\n Wind-Speed: ${speed} m/s`;
    let td3 = document.createElement("td");
    td3.innerText = `Signs Of ${description} `;
    let td4 = document.createElement("td");
    td4.innerText = `Latitude: ${lat}°\nLongitude: ${lon}°`;

    tr1.append(td1,td2,td3,td4)
    tbody.append(tr1)
    table.append(thead,tbody)

    let map = document.createElement("iframe")
    map.src = `https://www.google.com/maps/embed/v1/place?q=${city.value}}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    
    main.append(table,map)
}


function display ({name,main:{temp},weather:[{description}]}){
    main.innerHTML = "";
        let text = document.createElement("h4")

    //
    text.innerText = `City: ${name}\n Temp: ${temp}°C\n Signs of ${description}`;
    // description.style.fontSize = "large"
    main.append(text)
    text.style.marginLeft = "40%"
    text.style.fontSize = "30px"

}