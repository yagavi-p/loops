//  printing fibonacci
function printFibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  printFibonacci(10);


// getting factorial value
  function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("result").innerText=("Factorial of " + n + " : " + answer);

// printing triangle star

  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
