var usernameErrMsgEl = document.querySelector('#username-error-message');
var usernameInputEl = document.querySelector('#username-input');
var submitBtnEl = document.querySelector('#submit-form');

// usernameInputEl.addEventListener('mouseenter', function () {
//   console.log('mouse entered');
// });

// usernameInputEl.addEventListener('mouseleave', function () {
//   console.log('mouse left');
// });

usernameInputEl.addEventListener('input', function (e) {
  var username = e.target.value;

  if (username.length < 5) {
    usernameErrMsgEl.setAttribute('class', 'form-text text-danger');
  } else {
    // usernameErrMsgEl.setAttribute('class', 'display-none');
    usernameErrMsgEl.setAttribute('class', 'visibility-hidden');
  }
});

submitBtnEl.addEventListener('click', function (e) {
  e.preventDefault();

  var userData = {
    username: usernameInputEl.value,
  };

  console.log('Submitting form. User data is:', userData);
});
