//block scope yay!
{
  var es5 = "hello";
  let es6let = 6;
  const es6const = 7;
}

//lambdas yay!
const x3 = a => a * 3;

//Template literals
const es6Rocks = function(){
  let greeting = "hello"
  this.sentance = `${greeting} how are
    you?`;
};

// new es6Rocks().sentance

//modules :-( Only supported by transpilers and node so far
//import { member1 , member2 } from "module-name";

//and many many more....
