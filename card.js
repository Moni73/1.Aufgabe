let question = document.getElementById("question");
question.addEventListener("input", () => {
  let count = question.value.length;
  document.getElementById(
    "count-result"
  ).textContent = `Number of letters: ${count}`;
});

let question1 = document.getElementById("question1");
question1.addEventListener("input", () => {
  let count = question1.value.length;
  document.getElementById(
    "count-result1"
  ).textContent = `Number of letters: ${count}`;
});

let question2 = document.getElementById("question2");
question2.addEventListener("input", () => {
  let count = question2.value.length;
  document.getElementById(
    "count-result2"
  ).textContent = `Number of letters: ${count}`;
});
