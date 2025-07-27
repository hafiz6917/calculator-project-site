const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const backspaceBtn = document.querySelector('.backspace');
const offBtn = document.querySelector('.off');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    display.value += btn.textContent;
  });
});

clearBtn.addEventListener('click', () => {
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error احا يعم';
  }
});

backspaceBtn.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

offBtn.addEventListener('click', () => {
  window.close(); // يعمل في بعض المتصفحات فقط
  window.location.href = "about:blank";
});
