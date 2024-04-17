const toggle = document.querySelector("#toggle");

const circle = document.querySelector("#circle");

const container = document.querySelector("#container");

let flag = true;
toggle.addEventListener("click", () => {
  if (flag) {
    circle.classList.remove("left-0");
    circle.classList.add("right-0");
    toggle.style.backgroundColor = "rgb(33, 33, 32)";
    container.style.backgroundColor = "black";
    document.querySelector("p").style.color = "white";
    flag = false;
  } 
  else 
  {
    circle.classList.remove("right-0");
    circle.classList.add("left-0");
    toggle.style.backgroundColor = "black";
    container.style.backgroundColor = "white";
    document.querySelector("p").style.color = "black";
    flag = true;
  }
});