const images = ["0.jpg", "1.jpg","2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImages}`

const background = document.querySelector("#background");
document.body.appendChild(bgImage);

console.log(bgImage);