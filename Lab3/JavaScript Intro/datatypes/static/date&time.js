function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
    let date = new Date(2022, 0, 3);  
    console.log( getWeekDay(date) );

console.log("--")
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
  let date1 = new Date(2022, 0, 3);  
  console.log( getLocalDay(date1) ); 

console.log("--")
let date2 = new Date(2022, 0, 2);

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  console.log( getDateAgo(date2, 1) ); 
  console.log( getDateAgo(date2, 2) ); 
  console.log( getDateAgo(date2, 365) );
  
console.log("--")

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2022, 0) ); 
  console.log( getLastDayOfMonth(2022, 1) ); 
  console.log( getLastDayOfMonth(2023, 1) );
  
  
console.log("--")
function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000); 
  }
  
  console.log( getSecondsToday() );


console.log("--")
function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }

   console.log( getSecondsToTomorrow());
