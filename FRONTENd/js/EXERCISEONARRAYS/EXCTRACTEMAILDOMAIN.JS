
// 10. Extract Email Domains
let emails = ["ankit@gmail.com", "rahul@yahoo.com", "neha@outlook.com"];
let domains = [];
for (let i = 0; i < emails.length; i++) {
  domains.push(emails[i].split("@")[1]);
}
console.log(domains);