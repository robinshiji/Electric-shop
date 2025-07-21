const text = "John Brothers – Complete Electric Solutions";
const heading = document.getElementById("typing-heading");

let index = 0;
let isDeleting = false;

function typeEffect() {
  heading.innerText = text.substring(0, index);

  if (!isDeleting) {
    index++;
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  } else {
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

window.addEventListener("DOMContentLoaded", typeEffect);
