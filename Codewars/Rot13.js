function rot13(message) {
  let result = [];

  for (let char of message) {
    let codeSum = char.charCodeAt(0) + 13;
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      if (codeSum > 122) {
        let newChar = codeSum - 122 + 96;
        result.push(String.fromCharCode(newChar));
      } else {
        result.push(String.fromCharCode(codeSum));
      }
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      if (codeSum > 90) {
        let newChar = codeSum - 90 + 64;
        result.push(String.fromCharCode(newChar));
      } else {
        result.push(String.fromCharCode(codeSum));
      }
    } else {
      result.push(char);
    }
  }

  return result.join('');
};

module.exports = {rot13};