const fs = require("fs");

const book = {
  title: "Harry Potter",
  author: "J.K Rowling",
};

const stringBook = JSON.stringify(book);

// fs.writeFileSync("1-book.json", stringBook);

const dataBuffer = fs.readFileSync("car.json");
console.log(dataBuffer.toString());

const JSONdata = JSON.parse(dataBuffer.toString());
console.log(JSONdata);
// console.log(book);
// console.log(stringBook);

// const JSONbook = JSON.parse(stringBook);

// console.log(JSONbook);
