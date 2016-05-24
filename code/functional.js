var x2 = function(i){ return i * 2; };

//Functions as parameters
var displayResult = function(func, input){
  return 'Answer is ' + func(input);
};

//What is x?
var x = displayResult(x2, 4);
//for an extra point what is y?
var y = displayResult(x2);

//Anonymous functions - what is y?
var y  = displayResult(function(i){ return i * 3;}, 4);

//Composition using closures
var displayTimes2 = function(i){
  return displayResult(x2, i);
};

var z = displayTimes2(2000);
