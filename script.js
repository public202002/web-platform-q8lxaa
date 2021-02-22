console.log('hello!')

function xxx(aa){
  console.log("hi")
  setTimeout(aa, 1000, aa)
}

(function(aa){
  console.log("hi")
  setTimeout(aa, 1000, aa)
}
)(function(aa){
  console.log("hi")
  setTimeout(aa, 1000, aa)
})


// "foo" is a function declaration
// and is created on entering the context
 
console.log(foo); // function
 
function foo(x) {
  console.log(x);
}(1); // and this is just a grouping operator, not a call!
 
(function (x) {
  console.log(x);
})(11); // and this is just a grouping operator, not a call!

foo(10); // and this is already a call, 10