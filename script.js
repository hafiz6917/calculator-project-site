const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      currentInput = '';
      display.value = '';
    } else if (button.classList.contains('equal')) {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = 'خطأ';
        currentInput = '';
      }
    } else if (button.classList.contains('back')) {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
