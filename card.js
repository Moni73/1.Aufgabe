const question = document.getElementById("question");
question.addEventListener("input", () => {
  const count = question.value.length;
  document.getElementById(
    "count-result"
  ).textContent = `Number of letters: ${count}`;
});

const question1 = document.getElementById("question1");
question1.addEventListener("input", () => {
  const count = question1.value.length;
  document.getElementById(
    "count-result1"
  ).textContent = `Number of letters: ${count}`;
});

const question2 = document.getElementById("question2");
question2.addEventListener("input", () => {
  const count = question2.value.length;
  document.getElementById(
    "count-result2"
  ).textContent = `Number of letters: ${count}`;
});
