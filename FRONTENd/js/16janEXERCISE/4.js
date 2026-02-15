const emails = ["abc@gmail.com", "xyz@yahoo.in", "pqr@hotmail.com", "test@domain.com"];
const domains = emails.map(email => email.split("@")[1]);
const comDomains = domains.filter(d => d.endsWith(".com"));
comDomains.forEach(d => console.log(d));