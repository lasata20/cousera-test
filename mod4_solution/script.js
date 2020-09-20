
( function () {

var names = ["Yaakov", "John", "Joe", "Leo", "Paul", "Jimmy", "Laura", "Anny", "Jacob", "Marie"];

( function(window){
var helloSpeaker= {};

  var speakWord="Hello";
  helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
  }
  window.helloSpeaker=helloSpeaker;
})(window);


( function(window){
var byeSpeaker={};

var speakWord = "Good Bye";
byeSpeaker.speak=function(names) {
  console.log(speakWord + " " + names);
}
window.byeSpeaker=byeSpeaker;
})(window);


for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j' || firstLetter == 'J') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
