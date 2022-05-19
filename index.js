function changeBG(color) {
  document.body.style.backgroundColor = color;
  let txt = document.getElementsByClassName("text1");
  if (color == "black") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for (let elm of txt) {
      elm.style.color = "black";
    }
  }
}

window.addEventListener("scroll", function () {
  let navbar = this.document.getElementById("menu-bar");
  if (window.pageYOffset >= 298) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
