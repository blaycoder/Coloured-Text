   /*Solve the bug
      1. How do you change the colour of a text
      2. How do you alert the text in a textbox
      3. How do you change the size of a text in a textbox
   */

let newText = document.querySelector('.newText');
const changeTextColour = document.querySelector("#change");
const changeBackgroundColour = document.querySelector('#changeBG');

changeTextColour.addEventListener('click', () => {
   let inputText = document.querySelector('.text').value;
   let colourValue = document.querySelector('#colourPicker').value;
   newText.style.color = colourValue;
   newText.textContent = inputText;
})
