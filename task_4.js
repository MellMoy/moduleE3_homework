function printNumbers(from, to) {
   let current = from;
   const intervalId = setInterval(() => {
       console.log(current);
       if (current === 15) {
           clearInterval(intervalId);
       } else {
           current++;
       }
   }, 1000);
}

printNumbers(5);