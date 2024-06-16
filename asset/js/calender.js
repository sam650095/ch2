var arr = [];
function getRandomInt(max) {
  for (let i = 0; i < 5; i++) {
    var random_num = Math.floor(Math.random() * max);
    arr[i] = random_num;
  }
  return;
}
getRandomInt(31);
console.log(arr);
const month_arr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function setCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  document.getElementById("calender_year").textContent = year;
  document.getElementById("calendar_month").textContent = month_arr[month - 1];

  const weeks = document.querySelectorAll(".calendar_day");
  weeks.forEach((week) => {
    for (let i = 0; i < 7; i++) {
      const dayContent = document.createElement("div");
      dayContent.id = "day_content";
      dayContent.classList.add("flex-fill");
      week.appendChild(dayContent);
    }
  });

  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const prevMonthLastDate = new Date(year, month - 1, 0).getDate();

  let dayCounter = 1;
  let nextMonthCounter = 1;
  const dayContents = document.querySelectorAll("#day_content");

  for (let i = firstDay - 1; i >= 0; i--) {
    dayContents[i].textContent = prevMonthLastDate - firstDay + i + 1;
    dayContents[i].classList.add("opacity-25");
  }
  for (let i = firstDay; i < dayContents.length; i++) {
    if (dayCounter <= lastDate) {
      dayContents[i].textContent = dayCounter;
      if (dayCounter === day) {
        dayContents[i].textContent = "";
        const todaysdiv = document.createElement("span");
        todaysdiv.textContent = dayCounter;
        todaysdiv.classList.add(
          "text-light",
          "bg-danger",
          "p-1",
          "rounded-circle"
        );
        dayContents[i].appendChild(todaysdiv);
      }
      if (arr.includes(dayCounter)) {
        dayContents[i].appendChild(document.createElement("br"));
        const btn = document.createElement("button");
        btn.textContent = "資訊管理...";
        btn.classList.add("btn", "btn-secondary", "btn-extrasm");
        btn.onclick = function () {
          setDetail(month_arr[month - 1], i - firstDay + 1);
        };
        dayContents[i].appendChild(btn);
      }
      dayCounter++;
    } else {
      dayContents[i].textContent = nextMonthCounter;
      dayContents[i].classList.add("opacity-50");
      nextMonthCounter++;
    }
  }
}
function setDetail(Month, Day) {
  console.log(Month, Day);
  const detail_title = document.getElementById("detail_title");
  detail_title.textContent = Month + ", " + Day;

  const detail_content = document.getElementById("detail_content");
  detail_content.classList.add("lh-lg");
  detail_content.innerHTML = ""; // 清空原有內容

  const content = `8 AM - 10 AM [ABC教授] <br> 10 AM - 12 PM  [資訊管理係] <br> 14 PM - 15 PM [資訊管理係]`;
  detail_content.innerHTML = content;
}
window.onload = setCurrentDate;
