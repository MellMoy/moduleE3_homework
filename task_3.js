function makeAdder(x) {
   return function(y) {
     return x + y;
   };
 }
 
 const adder = makeAdder(5);
 console.log(adder(3)); 
 console.log(adder(10)); 
