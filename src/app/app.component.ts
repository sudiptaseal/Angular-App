import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This is my first angular app.';
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Satyajit_Ray_in_New_York_%28cropped%29.jpg' 
  isDisabled = true;
  isActive : boolean = true;
  fruitName : String = 'apple';

  buttonClick() {
    alert("Hi");
  }

  logPrint() {
    console.log("Mouse over")
  }

  keyUp() {
    console.log("Key pressed");
  }

  keyUp2(event : object) {
    console.log(event);
  }

  keyUp3(event : any) {
    if(event.keyCode == 13){
      alert("Enter key pressed")
    }
  }

  keyFilter() {
    alert("Enter key pressed")
  }

  keyFilterA() {
    alert("a pressed")
  }
  keyUpFilter(user: HTMLInputElement) {
    console.log(user.value);
  }
}
