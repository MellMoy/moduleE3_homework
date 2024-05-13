countEvenOddZero([1, 2, 0, 3, 4, 5, null, 6, 7, 8, 9]);

function countEvenOddZero(arr) {
   let evenCount = 0;
   let oddCount = 0;
   let zeroCount = 0;
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === 0) {
       zeroCount++;
     } else if (arr[i] % 2 === 0) {
       evenCount++;
     } else {
       oddCount++;
     }
   }
 
   console.log(`Number of even elements: ${evenCount}`);
   console.log(`Number of odd elements: ${oddCount}`);
   console.log(`Number of zero elements: ${zeroCount}`);
 }








