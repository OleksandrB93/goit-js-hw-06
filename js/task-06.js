const inputRef = document.querySelector("input");

inputRef.addEventListener("blur", validValue);

function validValue(event) {
  const inputEvent = event.currentTarget;
  const inputLength = Number(inputEvent.dataset.length);

  if (inputEvent.value.length === inputLength) {
    inputEvent.classList.remove("invalid");
    inputEvent.classList.add("valid");
  } else {
    inputEvent.classList.remove("valid");
    inputEvent.classList.add("invalid");
  }
}







// const validationInputRef = document.querySelector("input#validation-input");

// const onValidationInputBlur = ({
//   currentTarget: { value, dataset, classList },
// }) => {
//   const classes = ["valid", "invalid"];

//   value.length != dataset.length && classes.reverse();

//   classList.contains(classes[1]) && classList.remove(classes[1]);
//   classList.add(classes[0]);
// };

// validationInputRef.addEventListener("blur", onValidationInputBlur);
