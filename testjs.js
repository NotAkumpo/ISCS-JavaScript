// const btn = document.querySelector("#btn");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
// });

// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });

// btn.onclick = () => alert("Hello World");