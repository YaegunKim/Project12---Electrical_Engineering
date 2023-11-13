let draggable = document.getElementById('draggable');
let isDragging = false;
let offsetX, offsetY;
let lastX, lastY;

draggable.addEventListener('mousedown', function (e) {
    e.preventDefault(); // prevent any unwanted behaviors

    // Mark as dragging
    isDragging = true;

    // Calculate the initial offset
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;

    // Store the initial position
    lastX = e.clientX - offsetX;
    lastY = e.clientY - offsetY;

    // Optional: Adjust cursor style to indicate dragging
    draggable.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', function (e) {
    if (!isDragging) return;

    requestAnimationFrame(() => {
        // Calculate the new position
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        if (x !== lastX || y !== lastY) {
            draggable.style.left = x + 'px';
            draggable.style.top = y + 'px';

            // Store the new position
            lastX = x;
            lastY = y;
        }
    });
});

window.addEventListener('mouseup', function (e) {
    // End dragging
    isDragging = false;

    // Optional: Reset cursor style
    draggable.style.cursor = 'grab';
});
