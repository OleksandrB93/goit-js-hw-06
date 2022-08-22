const loginRef = document.querySelector("form.login-form");

const onLoginFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value) {
    alert("Please enter your Email address!");
    return;
  }
  debugger;
  if (!password.value) {
    alert("Please enter your Password!");
    return;
  }

  const userObject = createUserObject(email, password);
  console.log(userObject);
  event.currentTarget.reset();
};

const createUserObject = (email, password) => ({
  [email.name]: email.value,
  [password.name]: password.value,
});

loginRef.addEventListener("submit", onLoginFormSubmit);
