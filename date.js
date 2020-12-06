const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector(".date-title");

const dayOfWeek = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");

function getDate() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth() + 1;
  const days = date.getDate();
  const dayLabel = date.getDay();

  dateTitle.innerText = `${years}${
    months < 10 ? `.0${months}` : `.${months}`
  } ${days < 10 ? `.0${days}` : `.${days}`}.${dayOfWeek[dayLabel]}`;
}

function init() {
  getDate();
}

init();
