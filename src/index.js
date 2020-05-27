const pictureFrame = document.getElementById('small-container');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const locationDisplay = document.getElementById('location-display');

var numberOfPhotos = 0;
const photoWidth = 950;
var currentPhotoIndex = 0;

locationDisplay.addEventListener('click', function(event) {
    for (i=0; i<locationDisplay.children.length; ++i) {
        locationDisplay.children[i].id = '';
    }
    currentPhotoIndex = `${event.target.dataset.index}`;
    event.target.id = 'location-circle-selected';
    setActiveLocation(event.target.dataset.index);
    changePhoto(getTranslateValue(currentPhotoIndex));
});

leftButton.addEventListener('click', previousPhoto);
rightButton.addEventListener('click', nextPhoto);

function setActiveLocation () {
    for (i=0; i<locationDisplay.children.length; ++i) {
        locationDisplay.children[i].id = '';
    }
    locationDisplay.children[currentPhotoIndex].id = 'location-circle-selected';
}


function changePhoto (translateValue) {
    pictureFrame.style.transform = `translateX(${translateValue}px)`;
}

function getTranslateValue (index) {
    var translateValue = -1 * (index * photoWidth);
    setActiveLocation(index);
    return translateValue;
}

function previousPhoto () {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        changePhoto(getTranslateValue(currentPhotoIndex));
    }
}

function nextPhoto () {
    if (currentPhotoIndex < numberOfPhotos-1) {
        currentPhotoIndex++;
        changePhoto(getTranslateValue(currentPhotoIndex));
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
    locationDisplay.children[0].id = 'location-circle-selected';
}

createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();
createNewPhoto();

setInterval(nextPhoto, 5000);

//make function that loops around on the slideshow... call this function in setInterval
//function should change current Photo to index 0 when slideshow reaches the end