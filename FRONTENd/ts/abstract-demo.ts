abstract class Shape {
  constructor(public radius: number) {}

  abstract area(): number;
}

class Circle extends Shape {
  constructor(radius: number) {
    super(radius);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.area());

