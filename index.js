let deadlineTitle = document.querySelector(".deadline-title");
let items = document.querySelectorAll(".counting-number");
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  let futureYear = document.getElementById("inputYear").value;
  let select = document.getElementById("inputMonth");
  let futureMonthText = select.options[select.selectedIndex].value;
  let futureDay = document.getElementById("inputDay").value;
  let futureHour = document.getElementById("inputHours").value;
  let futureMins = document.getElementById("inputMins").value;

  let futureMonth;

  switch (futureMonthText) {
    case "January":
      futureMonth = 0;
      break;
    case "February":
      futureMonth = 1;
      break;
    case "March":
      futureMonth = 2;
      break;
    case "April":
      futureMonth = 3;
      break;
    case "May":
      futureMonth = 4;
      break;
    case "June":
      futureMonth = 5;
      break;
    case "July":
      futureMonth = 6;
      break;
    case "August":
      futureMonth = 7;
      break;
    case "September":
      futureMonth = 8;
      break;
    case "October":
      futureMonth = 9;
      break;
    case "November":
      futureMonth = 10;
      break;
    case "December":
      futureMonth = 11;
      break;
    default:
      console.log("not a month");
  }

  deadlineTitle.textContent = `${futureDay} ${futureMonthText} ${futureYear}, at ${futureHour}:${futureMins} is in `;

  let futureDate = new Date(
    futureYear,
    futureMonth,
    futureDay,
    futureHour,
    futureMins
  );

  const futureTime = futureDate.getTime();

  function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today; //all in ms
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }

    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });

    if (t < 0) {
      clearInterval(countdown);
      items.forEach((item) => {
        item.innerHTML = "00";
      });
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();
});
