function validstring(str){
    let pattern=/^Hello/;
    return pattern.test(str);
}


console.log(validstring("hello i am Ankit"));