import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'carloss';
  age = 30
  img = 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  btnDisabled = true
  person = {
    name: 'mateo',
    age: 18,
    avatar: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  }
  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }
  increaseAge() {
    this.person.age += 1
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop);

  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement
    this.person.name = element.value
    // console.log(element.value);

  }
}
