// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("this is a promise");
//   } else {
//     reject("this is not a promise");
//   }
// });
// // console.log(myPromise);
// // myPromise
// //   .then((value) => {
// //     return value + 1;
// //   })
// //   .then((val) => {
// //     console.log(val);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// const myNotesValue = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("thi is notesValue");
//   }, 3000);
// });

// myNotesValue.then((val) => {
//   console.log(val);
// });
// myPromise.then((value) => {
//   console.log(value);
// });
const myUsers = {
  userLists: [],
};
const myCoolFunction = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const solve = await res.json();
  return solve;
};
myCoolFunction();
console.log(typeof myCoolFunction());
const anotherFunction = async () => {
  const noteS = await myCoolFunction();
  myUsers.userLists = noteS;
  console.log(myUsers.userLists);
};
anotherFunction();
console.log(myUsers.userLists);
