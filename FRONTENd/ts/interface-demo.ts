import { User } from "./user.js";

let user1: User = {
  id: 1,
  name: "Ravi"
};

let user2: User = {
  id: 2,
  name: "Smith",
  email: "Smith@gmail.com"
};

console.log(user1);
console.log(user2);

let users: User[] = [user1, user2];
console.log(users);
