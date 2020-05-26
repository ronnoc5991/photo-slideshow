const pictureFrame = document.getElementById('small-container');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const locationDisplay = document.getElementById('location-display');

leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);

var numberOfPhotos = 0;
const photoWidth = 950;
var clickCount = 0;

function slideLeft () {
    if (clickCount > 0) {
        clickCount -= 1;
        pictureFrame.style.transform = `translateX(-${photoWidth * clickCount}px)`;
    }
}

function slideRight () {
    if (clickCount < numberOfPhotos-1) {
        clickCount += 1;
        pictureFrame.style.transform = `translateX(-${photoWidth * clickCount}px)`;
    }
}

function createNewPhoto (imageSource = 'https://source.unsplash.com/random/950x450') {
    var imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.dataset.index = `${numberOfPhotos}`;
    var image = document.createElement('img');
    image.src = imageSource;
    imageContainer.appendChild(image);
    pictureFrame.appendChild(imageContainer);
    var locationCircle = document.createElement('div');
    locationCircle.className = "location-circle";
    locationDisplay.appendChild(locationCircle);
    locationCircle.dataset.index = `${numberOfPhotos}`;
    numberOfPhotos += 1;
}

createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();

// current photo and location circles need to be linked.. both have indexes attached in dataset... current photo's corresponding location circle should display hover effects
//should be a function called "determineTranslateValue" that uses the index number of the selected/current photo and multiplies by photowidth to get translate position;