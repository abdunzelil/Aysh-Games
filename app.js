function imgSlider(anything) {
  document.querySelector('.titleImage').src = anything;

}

function changeCircleColor(color) {
  const circle = document.querySelector('.titlecircle');
  circle.style.background = color;
  const logoSpan = document.querySelector('#logoSpan');
  logoSpan.style.color = color;
  const textSpan = document.querySelector('#textSpan');
  textSpan.style.color = color;
  const learnMoreButton = document.querySelector('#learnMoreButton');
  learnMoreButton.style.background = color;
}

// Güzel bir navbar alternatifi!
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
