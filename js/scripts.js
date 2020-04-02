var words = [];
var modifiedWords = [];

var sorter = function(){
  words.forEach(function(word){
    if (word.length >= 3){
      modifiedWords.push(word);
    };
  });
};

jQuery(document).ready(function(){
  jQuery("#sentenceInput").submit(function(event){
    event.preventDefault();
    var sentenceInput = jQuery("#sentence1").val();
    words = sentenceInput.split(' ');
    sorter();
    modifiedWords.reverse();
    var sentenceOutput = modifiedWords.join(' ')
    jQuery(".output").append("<p>" + sentenceOutput + "</p>");
  });
});