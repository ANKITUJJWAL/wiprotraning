//literal type allows only specific values for a variable
let status: "success" | "error";
status = "success";
console.log(status);
status = "error";
console.log(status);
//status="pending";//Compilation ERROR

