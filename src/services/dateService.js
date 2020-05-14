const DAYS_OF_WEEK = ['Sun','Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 // Returns the string representation of a Date object as 'YYYYMMDD'
function formatDate(dateObj) {
  let month = '' + (dateObj.getMonth() + 1);
  let day = '' + dateObj.getDate();
  const year = dateObj.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join(''); // Pass any character in join as as separator
}

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

// Returns an array of objects representing days of the current week, with their day name and a 'YYYYMMDD' string
function getCurrentWeek() {
  const today = new Date();
  const sundayDate = today.getDate() - today.getDay();
  const firstDay = 1; // 0 --> 6, Sunday --> Saturday
  return DAYS_OF_WEEK.map((dayName, idx) => {
    const nextDay = new Date();
    nextDay.setDate(sundayDate + idx + firstDay);
    dayName = (idx + firstDay >= DAYS_OF_WEEK.length ? DAYS_OF_WEEK[idx + firstDay - DAYS_OF_WEEK.length] : DAYS_OF_WEEK[idx + firstDay]);
    return {
      dayName,
      YYYYMMDD: formatDate(nextDay)
    }
  })
}

const getDD = (YYYYMMDD) => {
  return YYYYMMDD.slice(-2);
};

const getMonth = (YYYYMMDD) => {
  const monthNum = YYYYMMDD.slice(-4, -2);
  return MONTHS[parseInt(monthNum) - 1];
}

// Returns the Monday of the current week as 'YYYYMMDD'
const getMondayOfWeek = () => {
  const today = new Date();
  const mondayDate = today.getDate() - today.getDay() + 1;
  today.setDate(mondayDate);
  return formatDate(today);
}

// Returns the Sunday of the current week as 'YYYYMMDD'
const getSundayOfWeek = () => {
  const today = new Date();
  const sundayDate = today.getDate() - today.getDay() + 7;
  today.setDate(sundayDate);
  return formatDate(today);
}

// Returns the current day as 'YYYYMMDD'
const getToday = () => {
  const today = new Date();
  return formatDate(today);
}

export default {
  formatDate,
  getCurrentWeek,
  getDD,
  getMonth,
  getMondayOfWeek,
  getSundayOfWeek,
  getToday
};