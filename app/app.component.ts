import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Hello World!" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(359); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  constructor() {
    console.log("Hello World");
  }
}
