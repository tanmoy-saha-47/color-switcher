const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "reset":
        body.style.backgroundColor = "white";
        break;

      default:
        break;
    }

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "green") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "reset") {
    //   body.style.backgroundColor = "white";
    // }
  });
});
