
import { Role } from "./role.js";

let role: Role = Role.Admin;
console.log(role);


role = Role.User;
console.log(role);
role = Role.Guest;
console.log(role);

//role=4;//Compilation ERROR

//traversing enum
for (let r in Role) {
  if (isNaN(Number(r))) {
    console.log(`Role Name: ${r}, Role Value: ${Role[r as keyof typeof Role]}`);
  }
}
