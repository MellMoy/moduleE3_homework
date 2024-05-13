const pow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  console.log(pow(2, 3)); 
  console.log(pow(3, 2)); 
  console.log(pow(5, 4)); 