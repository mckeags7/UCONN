var imageContainer = document.querySelector('.img-container');
var image1 = document.querySelector('#image-1');
var image2 = document.querySelector('#image-2');
var image3 = document.querySelector('#image-3');
var image4 = document.querySelector('#image-4');

function updateState(element) {
  // Get the current value of the image's data-state attribute
  var state = element.getAttribute('data-state');

  if (state === 'still') {
    // Change the data-state attribute's value
    // There are two different ways this attribute can be set
    element.dataset.state = 'animate';
    // element.setAttribute('data-state', 'animate');

    // Update the image's source to the string being stored in the data-animate attribute
    element.setAttribute('src', element.dataset.animate);
  } else {
    // Change the attributes back to their non-animated values
    element.dataset.state = 'still';
    element.setAttribute('src', element.dataset.still);
  }
}

image1.addEventListener('click', function () {
  updateState(image1);
});

image2.addEventListener('click', function () {
  updateState(image2);
});

image3.addEventListener('click', function () {
  updateState(image3);
});

image4.addEventListener('click', function () {
  updateState(image4);
});
