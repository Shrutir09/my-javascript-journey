const textBox = document.getElementById("textBox");
const count = document.getElementById("count");

const limit = 20;

textBox.addEventListener("input", function () {
  let typedLength = textBox.value.length;
  let remaining = limit - typedLength;

  count.innerText = "Characters left: " + remaining;

  if (remaining < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
});
