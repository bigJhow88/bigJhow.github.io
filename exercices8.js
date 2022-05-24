/*JavaScript ES6 - Introdução a Higher Order Functions >> 8.1

const sum = (number1, number2) => {
    return number1 + number2;
}

const button = document.querySelector('#signup-button');

const registerUser = () => {
    console.log('Registrado com sucesso!')
};

button.addEventListener('click', registerUser);*/

/*const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

repeat(3, (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
});*/

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven);
  repeat(3, isOdd);