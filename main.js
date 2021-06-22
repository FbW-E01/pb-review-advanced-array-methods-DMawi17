// # Review - Advanced array methods

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use advanced array methods for all of these (forEach, map, etc.). You might have to search for an appropriate method to use on MDN.

// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.
const arr = [
    { name: "Pamela", URL: "https://lela.com", number: 46 },
    { name: "Dorthy", URL: "http://forest.info", number: 42 },
    { name: "Alden", URL: "https://benny.biz", number: 23 },
    { name: "Laurie", URL: "https://jasper.biz", number: 36 },
    { name: "Marge", URL: "http://maybell.com", number: 79 },
    { name: "Asha", URL: "http://omari.net", number: 44 },
    { name: "Jules", URL: "http://sally.com", number: 73 },
    { name: "Vernie", URL: "http://rickie.name", number: 93 },
    { name: "Alvena", URL: "https://eugenia.name", number: 55 },
    { name: "Gilbert", URL: "http://ethyl.org", number: 64 },
];
// // 2. Then based on the array, create a new array that contains just the names.
const namesOfArray = arr.map((obj) => obj.name);
console.log(namesOfArray);

// // 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.

const byURL = arr.forEach((obj) => {
  !obj.URL.startsWith("https")
      ? console.log(obj.URL)
      : console.log(`Invalid URL for ${obj.name}`);
});

// // 4. Sort the array based on the "number" property to a random order.

const rand = arr.sort(() => Math.random() - 0.5)
console.log(rand); // bias but it'll do for now

// // 5. Sort the array based on the "number" property, with the lowest number first.

const lowToHigh = arr.sort((a, b) => a.number - b.number)
console.log(lowToHigh);


// // 6. Sort the array based on the "number" property, with the highest number first.

const highToLow = arr.sort((a, b) => b.number - a.number);
console.log(highToLow);

// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`.

const newArr = arr.map(obj => obj.name);
const slicedAndJoined = newArr.slice(0, newArr.length - 1).join(', ');
const newString = `${slicedAndJoined} and ${newArr.splice(-1, 1)}`
console.log(newString);
