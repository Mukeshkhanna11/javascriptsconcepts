////json-javascript object notation
///json is string
///we cannot convert function into json
const myObj = {
  name: "mukesh",
  hobbies: ["learn", "watch youtube"],
  hello: () => {
    console.log("hello!");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);
const sendJSON = JSON.stringify(myObj); ///to convert into json
console.log(sendJSON);
const receiveJSON = JSON.parse(sendJSON); //to bring back to object
console.log(receiveJSON);
console.log(typeof receiveJSON);
///error handling
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("odd number!");
      }
      console.log("even number!");
    } catch (err) {
      console.log(err);
    } finally {
      console.log("this is the end");
      i++;
    }
  }
};
makeError();
