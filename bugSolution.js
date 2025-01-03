function foo(a, b) {
  if (a === null || b === null || a === 0 || b === 0 || a === false || b === false || a === "" || b === "") {
    return 0; //Or handle appropriately
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); // Output: 0
console.log(foo(5,false)); // Output: 0
console.log(foo(5,"")); // Output: 0