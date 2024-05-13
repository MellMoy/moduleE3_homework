function isPrime(num) {
   if (num > 1000) {
     console.log("Invalid input");
     return;
   }
 
   if (num < 2) {
     console.log(`${num} is not a prime number`);
     return;
   }
 
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) {
       console.log(`${num} is not a prime number`);
       return;
     }
   }
 
   console.log(`${num} is a prime number`);
 }

 isPrime (7);
