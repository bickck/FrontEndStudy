const images =[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgrounds = document.createElement("img");

backgrounds.src = `img/${chosenImage}`;

document.body.appendChild(backgrounds);