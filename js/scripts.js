

// hide userInput
// find vowels in puzzle.length
// replace vowels with "-"
// show new input

$(document).ready(function() {
  $("#submission").submit(function(event) {
    event.preventDefault();
    // var vowels = ("a", "e", "i", "o", "u");
    var userInput = $("input#sentence").val();
    var encoding = Array.from(userInput);
    for (var index = 0; index < userInput.length; index += 1) {

      // var vowels = encoding.map(function(vowel) {
        if (encoding[index] === "a") {
          (encoding[index] = "-");
        }
        if (encoding[index] === "e") {
          (encoding[index] = "-");
        }
        if (encoding[index] === "i") {
          (encoding[index] = "-");
        }
        if (encoding[index] === "o") {
          (encoding[index] = "-");
        }
        if (encoding[index] === "u") {
          (encoding[index] = "-");
        }
      // });

// loop to check if encoding[index] === "a" then "e" then "i" then "o" then "u"
  // if true, then replace encoding[index] w/ "-"
  // if false, move on
      //
      // if (encoding[index] === vowels) {
      //   (encoding[index] = "-")
      // };
    };

    alert(encoding);
  });
});
