function validateCom(str) {
  let pattern = /\.com$/;
  return pattern.test(str);
}

console.log(validateCom("example.com"));     
console.log(validateCom("test.org"));        
console.log(validateCom("mywebsite.in"));    
console.log(validateCom("hello.com"));       