console.log(1);
const views = document.getElementById("view1");
console.log(views);
const view2 = document.querySelector("#view2");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
}
const h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "hello world!....";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>hello</h1> <h2>world</h2>";
navbar.style.display = "flex";
navbar.style.justifyContent = "space-evenly";
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextElementSibling);
view1.style.display = "none";
while (view2.lastChild) {
  view2.lastChild.remove();
}
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "black";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.display = "flex";
  newDiv.style.margin = "10px";

  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";

  parent.append(newDiv);
};
//createDivs(view2, 10);
for (let i = 1; i <= 10; i++) {
  createDivs(view2, i);
}
