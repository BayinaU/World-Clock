// setInterval(function(){insert here}, 1000);

function updateTime() {
  // DUBAI
  let dubaiElement = document.querySelector("#dubai");

  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // VANCOUVER
  let vancouverElement = document.querySelector("#vancouver");

  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class = "city">
   <div>
    <h2>${cityName}</h2>
    <div class = "date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class = "time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
