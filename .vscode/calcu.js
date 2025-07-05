const display = document.getElementById('display');

function append(char) {
  if (display.value === '0' || display.value === 'Error') {
    display.value = char;
  } else {
    display.value += char;
  }
}

function clearDisplay() {
  display.value = '0';
}

function backspace() {
  display.value = display.value.slice(0, -1) || '0';
}

function square() {
  try {
    const result = eval(display.value);
    display.value = result * result;
  } catch {
    display.value = 'Error';
  }
}

function calculate() {
  try {
    let expression = display.value;
    if (expression.includes('%')) {
      const parts = expression.split('%');
      const a = parseFloat(parts[0]);
      const b = parseFloat(parts[1]);
      display.value = a % b;
    } else {
      display.value = eval(expression);
    }
  } catch {
    display.value = 'Error';
  }
}