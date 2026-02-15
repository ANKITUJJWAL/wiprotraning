
 interface User {
  id: number;
  name: string;
}

function greet(user: User): string {
  return `Hello ${user.name}`;
}

const user1: User = {
  id: 1,
  name: "Ravi",
};

console.log(greet(user1));
