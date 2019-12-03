const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector(".keys");
  keys.addEventListener("click", (event) => {
      const {target} = event;
      if (!target.matches('button')) {
          return;
      }

      if (target.classList.contains('operator')) {
          console.log('operator', target.value);
          return;
      }

      if (target.classList.contains('decimal')) {
          console.log('decimal', target.value);
          return;
      }

      if (target.classList.contains('all-clear')) {
          console.log('all-clear', target.value);
          return;
      }
          console.log('digit', target.value);
      
  });

  
    //https://freshman.tech/calculator/