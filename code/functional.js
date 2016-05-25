var x2 = function(i){ return i * 2; };

//Functions as parameters
var displayResult = function(func, input){
  return 'Answer is ' + func(input);
};

//What is r1?
var r1 = displayResult(x2, 4);
//for an extra point what is r2?
var r2 = displayResult(x2);
//Anonymous functions - what is r3?
var r3  = displayResult(function(i){ return i * 3;}, 4);

//Composition using closures
var displayTimes2 = function(i){
  return displayResult(x2, i);
};

var z = displayTimes2(2000);
