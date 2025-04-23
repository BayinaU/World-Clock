// setInterval(function(){insert here}, 1000);

function updateTime() {
  // DUBAI
  let dubaiElement = document.querySelector("#dubai");

  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]");

  // VANCOUVER
  let vancouverElement = document.querySelector("#vancouver");

  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");
  let vancouverTime = moment().tz("America/Vancouver");

  vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
