fs = require('fs');

const colors = ['lavendar', 'orange', 'cranberry', 'navyBlue', 'jellyFish', 'peacock']
const safeList = colors.map(color => {
  return `
    bg-${color}-700
    text-${color}-500
    text-${color}-700
    border-${color}-700
    bg-${color}-50
    text-${color}-900
    placeholder-${color}-500
    focus:ring-${color}-400
    hover:bg-${color}-400
    bg-${color}-500
    text-${color}-100
    text-${color}-50
    bg-${color}-100
    bg-${color}-200
    bg-${color}-300
    bg-${color}-400
    bg-${color}-500
    bg-${color}-600
    bg-${color}-700
    bg-${color}-800
    bg-${color}-900
  `
}).join(', ')

fs.writeFile('safelist.txt', safeList, function (err) {
  if (err) return console.log(err);
  console.log('Created safelist file.');
});