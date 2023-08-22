const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true; // if it contains the word, return true
  }
  
  const verticalJoin = [];
 
  for (let col = 0; col < letters.length; col++) { // Create the for loop
    let verticalWord = ''; // Create the string to push the letters into

    for (let row = 0; row < letters.length; row++) { // Nested loop to swap over the rows to col
      verticalWord += letters[row][col];
    }
    verticalJoin.push(verticalWord); // Push the string into the array
    
    for (let l of verticalJoin) {
      if (l.includes(word)) return true; // if it contains the word, return true
    }
  }

  return false;
};

module.exports = wordSearch;