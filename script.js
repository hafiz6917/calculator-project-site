const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const backspaceBtn = document.querySelector('.backspace');
const offBtn = document.querySelector('.off');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // تجاهل زر backspace من الإضافة
    if (!btn.classList.contains('backspace')) {
      display.value += btn.textContent;
    }
  });
});

clearBtn.addEventListener('click', () => {
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'احا يعم. اكتب صح';
  }
});

backspaceBtn.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

offBtn.addEventListener('click', () => {
  window.close(); // بعض المتصفحات فقط
  window.location.href = "about:blank";
});
