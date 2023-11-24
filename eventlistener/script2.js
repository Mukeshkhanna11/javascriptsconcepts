const view1 = document.getElementById("view1");
console.log(view1);
const doSomething = () => {
  alert("hey you clicked....");
};
view1.addEventListener("click", doSomething);
view1.removeEventListener("click", doSomething);
view1.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "you clicked again";
});
