let c = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      c--;
    } else if (styles.contains("increase")) {
      c++;
    } else {
      c = 0;
    }

    if (c > 0) {
      value.style.color = "blue";
    }
    if ( c < 0) {
      value.style.color = "red";
    }
    if (c === 0) {
      value.style.color = "black";
    }
    value.textContent = c;
  });
});