//callbacks
var longRunning = function(callback){
  setTimeout(function(){
    callback();
  },1000);
};

//what is the output?
var do2things = function(){
  longRunning(function(){ console.log('hello');});
  console.log('goodbye');
};



//Promises (ES6 alert!)
var longRunningPromise = function(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    }, 1000);
  });
};

var do2thingsWithAPromise = function(){
  longRunningPromise().then(function(){ console.log('after the promise');});
  console.log('goodbye');
};
