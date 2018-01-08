var sentence = prompt("Please type a sentence ...");


var firstLast = function(sentence){
	var firstChar = sentence[0];
  var lastChar = sentence[sentence.length-1];
  return (firstChar + lastChar).toUpperCase();
}

var sentence = firstLast(sentence);


var sentenceArray = sentence.split("");

sentenceArray.reverse();

alert(sentenceArray.join(""));
