// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('angular-bindings-demo');
// }
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  title = "Angular Bindings Demo";

  // For Interpolation
  message = "Hello from Angular!";
  currentDate = new Date();

  // For Property Binding
  imageUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
  isDisabled = false;
  maxLength = 20;

  // For Event Binding
  clickCount = 0;
  lastKeyPressed = "";
  mouseX = 0;
  mouseY = 0;

  // For Two-Way Binding
  userName = "";
  email = "";
  selectedColor = "#3f51b5";
  agreeToTerms = false;

  // For Attribute Binding
  colSpan = 2;
  ariaLabel = "Submit form button";

  // For Class Binding
  isActive = false;
  isHighlighted = false;
  statusClasses = {
    success: false,
    warning: false,
    error: false,
  };

  // For Style Binding
  textColor = "blue";
  fontSize = 16;
  backgroundColor = "#f0f0f0";

  // Methods for Event Binding
  handleClick() {
    this.clickCount++;
  }

  handleKeyUp(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  resetForm() {
    this.userName = "";
    this.email = "";
    this.selectedColor = "#3f51b5";
    this.agreeToTerms = false;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  setStatus(status: "success" | "warning" | "error") {
    this.statusClasses = {
      success: status === "success",
      warning: status === "warning",
      error: status === "error",
    };
  }

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }
}
