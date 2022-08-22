const refs = {
  rangeInput: document.querySelector("input#font-size-control"),
  textContent: document.querySelector("span#text"),
};

// debugger;
refs.rangeInput.value = refs.rangeInput.min;

const onRangeInputChange = (event) =>
  (refs.textContent.style.fontSize = `${event.currentTarget.value}px`);

refs.rangeInput.addEventListener("input", onRangeInputChange);
