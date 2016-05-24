//Scope is functional, not block

var foo = function(){
  var a = 3;
  amIhidden = false;

  if(a > 2){
    var b = 1;
  }

  console.log("a:" + a);
  console.log("b:" + b);

};
//Whats the output?
//what happens if I access amIhidden?

//use IIFE (Immediately-Invoked Function Expression) to hide globals
(function(j){
  var msg = "Hello Contents";
  j('h2').html(msg);
})(jQuery);

//Module patern
var ME = (function(){
  var realAge = 44;
  return {
    age: realAge - 5
  };
}());
//What's my age, can you tell if I'm a liar?
//ME.age
