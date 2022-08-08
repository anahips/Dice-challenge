let weather = [
  {
    temp: "3",
    humidity: "4",
    windSpeed: "5",
  },
];
console.log(weather);
console.log(weather.temp);
console.log(weather.humidity);
console.log(weather.windSpeed);
console.log(weather[0].temp);
console.log(weather[0].humidity);
console.log(weather[0].windSpeed);

let forecast = [
  {
    day: 25,
  },
  {
    day: 22,
  },
  {
    day: 27,
  },
  {
    day: 25,
  },
  {
    day: 21,
  },
  {
    day: 20,
  },
  {
    day: 20,
  },
];
console.log(forecast);

console.log(`The weather tomorrow is ${forecast[3].day}°`);
console.log(`The weather on Monday is ${forecast[1].day}°`);
console.log(`The weather yesterday was ${forecast[4].day}`);
