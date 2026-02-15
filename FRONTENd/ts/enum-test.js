"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_js_1 = require("./role.js");
let role = role_js_1.Role.Admin;
console.log(role);
role = role_js_1.Role.User;
console.log(role);
role = role_js_1.Role.Guest;
console.log(role);
//role=4;//Compilation ERROR
//traversing enum
for (let r in role_js_1.Role) {
    if (isNaN(Number(r))) {
        console.log(`Role Name: ${r}, Role Value: ${role_js_1.Role[r]}`);
    }
}
//# sourceMappingURL=enum-test.js.map