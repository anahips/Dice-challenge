// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[1]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[0] = "Funday";
console.log(weekDays[0]);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
let start = 1;
let deleteCount = 2;
let removedItems = weekDays.splice(start, deleteCount);
console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function showTemperature(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}

weekDays.forEach(showTemperature);
