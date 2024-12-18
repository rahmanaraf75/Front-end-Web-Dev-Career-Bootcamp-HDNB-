// Function to perform addition
function add() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    // Write your code here
    const result = num1 + num2; // Example of addition
    document.getElementById('result').textContent = result;
  }
  
  // Function to perform subtraction
  function subtract() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    // Write your code here
    const result = num1 - num2; 
    document.getElementById('result').textContent = result;
  }
  
  // Function to perform multiplication
  function multiply() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    const result = num1 * num2; 
    
    document.getElementById('result').textContent = result;
  }
  
  // Function to perform division
  function divide() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
      document.getElementById('result').textContent = 'Invalid input or Division by 0';
      return;
    }
    // Write your code here
    const result = num1 / num2; 
    document.getElementById('result').textContent = result;
  }
  
  // Function to perform modulus
  function modulus() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    // Write your code here
    const result = num1 % num2; 
    
    document.getElementById('result').textContent = result;
  }
  
  // Function to perform exponentiation
  function exponent() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    // Write your code here
    const result = num1 ** num2; 
    
    document.getElementById('result').textContent = result;
  }
  
  // Function to clear the input fields and result
  function clearFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = '0';
  }