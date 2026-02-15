"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(radius);
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);
console.log(circle.area());
//# sourceMappingURL=abstract-demo.js.map