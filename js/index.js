var userAge = parseFloat(prompt('Yoshingizni kiriting', '').trim(), 10);
var requiredAge = 18

if (isNaN(userAge)) {
  document.querySelector('.text-write-number').textContent = "Write number only, please!";
  document.body.style.backgroundColor = "gray"
} else {
  if (userAge >= requiredAge ) {
    document.querySelector('.text-allowed').textContent = "you can go into"
    document.body.style.backgroundColor = "green"
  } else {
    document.querySelector('.text-restricted').textContent = "your age is not in reauired age"
    document.body.style.backgroundColor = "red"
  }
}
