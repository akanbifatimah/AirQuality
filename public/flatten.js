const fs = require("fs");

let cities = {};
try {
  cities = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
} catch (e) {
  console.log("pls provide a data.json file in the data/ dir!");
}

// console.clear()
const c = Object.values(cities);

let b = 3;
const newCities = [];
for (let i = 0; i < c.length; ) {
  const city = c.slice(i, b);
  const rep = {
    city: city[0],
    aqi: city[1],
    cigg: city[2],
  };

  newCities.push(rep);

  b += 3;
  i += 3;
}

console.log(newCities);

fs.writeFileSync("./cities.json", JSON.stringify(newCities));
