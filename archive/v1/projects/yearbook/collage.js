const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

const context = canvas.getContext("2d");
context.scale(2, 2);

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let index = 0;
const images = ["yearbook1.jpg","yearbook2.jpg","yearbook3.jpg","yearbook4.jpg"].map(src => {
    const image = document.createElement("img");
    image.src = src;
    return image;
})

document.addEventListener("mousemove", function(event) {
    aimX = event.pageX;
    aimY = event.pageY;
    if(currentX === null) {
        currentX = event.pageX;
        currentY = event.pageY;
    }
})

canvas.addEventListener("click", function() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
})

const draw = function() {
    if(currentX) {
        if(images[index].complete) {
            context.drawImage(images[index], currentX - 150, currentY - 200, 300, 400) ;
        }
        currentX = currentX + (aimX - currentX) * 0.1;
        currentY = currentY + (aimY - currentY) * 0.1;
    }
    requestAnimationFrame(draw);
}

draw();
