var multiplyBy2 = function(i){ return i * 2; };

//Functions as parameters
var displayResult = function(func, input){
  return 'Answer is ' + func(input);
};

//What is x?
var x = displayResult(multiplyBy2, 4);

//Anonymous functions - what is y?
var y  = displayResult(function(i){ return i * 3;}, 4);

//Composition using closures
var displayTimes2 = function(i){
  return displayResult(multiplyBy2, i);
};

var z = displayTimes2(2000);
