// Reverse each word in the sentence

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const originalString = "Welcome to JS Coding Problems";
  const reversedString = reverseString(originalString);
  console.log(reversedString);
  
