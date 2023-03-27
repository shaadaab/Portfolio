var thm = document.getElementById("icon");
var lightText = document.getElementById("light-text");
var redclr = document.getElementById("red-clr");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    icon.src = "asets/closedc.png";
    lightText.innerHTML = "Tap to break the circuit";
    redclr.style.color = "red";
  } else {
    icon.src = "asets/openc.png";
    lightText.innerHTML = "Tap to complete the circuit";
    redclr.style.color = "rgb(0, 255, 162)";
  }
};

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Code👨‍💻 ";
  }, 0);

  setTimeout(() => {
    text.textContent = " Draw🖍️";
  }, 3000);

  setTimeout(() => {
    text.textContent = " Read📖";
  }, 6000);
};

textLoad();
setInterval(textLoad, 9000);
