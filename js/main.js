$(document).ready(function(){
    $(".loader").fadeOut(6000);
});
 // Get references to the car image and color buttons
    const carImage = document.getElementById('car-image');
    const redButton = document.getElementById('red');
    const blueButton = document.getElementById('blue');
    const greenButton = document.getElementById('green');

    // Event listeners for color buttons
    redButton.addEventListener('click', () => {
        carImage.style.filter = 'hue-rotate(314deg)'; // Red color
    });

    blueButton.addEventListener('click', () => {
        carImage.style.filter = 'hue-rotate(174deg)'; // Blue color
    });

    greenButton.addEventListener('click', () => {
        carImage.style.filter = 'hue-rotate(53deg)'; // Green color
    });