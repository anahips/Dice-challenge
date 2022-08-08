let country = "Guinea Bissau";
country = country.replace(" ", "-");
console.log(`I live in ${country}`);

let city = " Sydney   ";
city = city.trim();
console.log(`I want to travel to ${city}`);

let place = "School";
place = place.toUpperCase();
console.log(`There is a ${place} for opera singers`);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(`The ${attraction} is one of the main attractions`);

let sentence = `I went to visit the ${attraction} in ${city}, right next to my ${place}. Now, I'm getting ready for my trip to ${country}!`;
console.log(`${sentence}`);
