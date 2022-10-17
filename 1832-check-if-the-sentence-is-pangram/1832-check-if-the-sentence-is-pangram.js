/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var sentence = sentence.toLowerCase();
  for (var i = 0; i < alphabet.length; i++) {
    if (sentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};