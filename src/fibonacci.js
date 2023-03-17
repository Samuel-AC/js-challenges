const fibonacci = (n) => {
  
  if (!n) return;

  var fibonacciArray = [1];

  if (n == 1) return fibonacciArray;

  fibonacciArray.push(1);

  for(var i = 2, len = n; i < len; i++) {

    fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);

  }
  
  return fibonacciArray;

}

module.exports = fibonacci;