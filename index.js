function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

function reverseString(word) {
  const wordArray = word.split("");

  const reversedWordArray = wordArray.reverse();

  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

/* 
  Add your pseudocode here
  create a variable that has the original string
  create another variable that has original string in reverse order
  create an if statement to compare the two strings and return true or false
*/

/*
  Add written explanation of your solution here
  
     reverse the input string, then if the
    reversed string is the same as the input 
    return true else return false.
    
    create an array from the input string, then
    reverse the array. create a string from the 
    reversed array, then return the reversed string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
