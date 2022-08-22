// const refs = {
//   buttons: document.querySelectorAll("[data-action]"),
//   valueField: document.querySelector("#value"),
// };
// // console.log(refs.valueField)
// let counterValue = 0;

// const onCounterButtonClick = ({ currentTarget: { dataset } }) => {
//   if (dataset.action === "increment") {
//     counterValue += 1;
//   }
//   if (dataset.action === "decrement") {
//     counterValue -= 1;
//   }

//   refs.valueField.textContent = counterValue;
// };

// refs.buttons.forEach((button) =>
//   button.addEventListener("click", onCounterButtonClick)
// );

// const refs = {
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  valueRef.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
