// Your code here.
const container = document.querySelector(".items");
const cubes = document.querySelectorAll(".item");

let selectedCube = null;
let startX = 0;
let startY = 0;

// Select a cube
cubes.forEach(function(cube) {
    cube.addEventListener("mousedown", function(event) {
        selectedCube = cube;

        container.classList.add("active");

        const cubeRect = cube.getBoundingClientRect();

        startX = event.clientX - cubeRect.left;
        startY = event.clientY - cubeRect.top;

        event.preventDefault();
    });
});

// Move the selected cube
document.addEventListener("mousemove", function(event) {
    if (selectedCube) {
        const containerRect = container.getBoundingClientRect();

        let x = event.clientX - containerRect.left - startX;
        let y = event.clientY - containerRect.top - startY;

        const maxX = container.clientWidth - selectedCube.offsetWidth;
        const maxY = container.clientHeight - selectedCube.offsetHeight;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        selectedCube.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Stop dragging
document.addEventListener("mouseup", function() {
    selectedCube = null;
    container.classList.remove("active");
});