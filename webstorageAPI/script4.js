const myObj = {
  name: "mukesh",
  logname: () => {
    console.log(this.name);
  },
};
const myArray = ["eat", "sleep", "work"];

localStorage.setItem("myLocalStorage", JSON.stringify(myObj));

const myLocalData = JSON.parse(localStorage.getItem("mySessionStorage"));
console.log(myLocalData);
