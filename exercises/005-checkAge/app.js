function checkAge(name, age) {
  // your code here
  if(age<21){
    return `Go home, ${name}!`;
  }else{
    return `Welcome, ${name}!`;
  }
}
let output=checkAge('Adrian',20);
console.log(output);