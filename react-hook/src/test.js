const person = {
  id: 1,
  firstName: "Anushka",
  lastName: "Nemishte",
  email: "anushka@gmail.com",
  phone: 8010133160,
  age: 23,
};

console.log(person);

const newObject = {
  ...person,
  newkey: "newVal",
};

console.log("newObj", newObject);

//to run this file on node type in terminal "node .\src\test.js" folder and file name
