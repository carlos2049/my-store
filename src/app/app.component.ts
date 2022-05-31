import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  widthImg = 10
  name = 'carloss';
  age = 30
  img = 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  btnDisabled = true
  person = {
    name: 'mateo',
    age: 18,
    avatar: 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  names: string[] = ['carlos', 'esteban', 'marco']
  newName = ''
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


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
  addName() {
    this.names.push(this.newName)
    this.newName = ''
  }
  deleteName(i: number) {
    this.names.splice(i, 1)
  }
  onRegister() {
    console.log(this.register);

  }

}
