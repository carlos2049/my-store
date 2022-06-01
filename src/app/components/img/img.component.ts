import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = 'valor init'

  @Input('img')
  set changeImg(newImg: string) {
    /// aqui eschuchamos cambios especificos,
    // tambien se puede eschuchar en ngOnChanges pero ahi eschucha todos los input, y se debe especificar cual escuchar
    this.img = newImg
    console.log('change just img', this.img);

  }
  @Input() alt: string = 'valor init'
  @Output() loaded = new EventEmitter<string>()
  imageDefault = './assets/images/bike.jpg'
  // counter = 0
  // counterFn: number | undefined

  constructor() {
    // before render
    // no realizar cosas asincronas
    console.log('contructor', 'imgValue=>', this.img);

  }
  ngOnChanges(changes: SimpleChanges): void {
    // antes y durante el  render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue=>', this.img);
    // con esto podemos ver todos los cambios del input, pero hay que especificar que
    console.log('changes', changes['changeImg']);

  }

  ngOnInit(): void {
    // before render
    // aqui se pueden realizar tareas asinconas, pero solo se ejecuta una vez
    console.log('ngOnInit', 'imgValue=>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1
    //   console.log('run counter');

    // }, 1000)

  }

  ngAfterViewInit(): void {
    // despues del render
    // manejamos hijos
    console.log('ngAfterViewInit');

  }
  ngOnDestroy(): void {
    // delete component
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn)

  }

  imgError() {
    this.img = this.imageDefault
  }
  imgLoaded() {
    console.log('loaded');
    this.loaded.emit(this.img)

  }

}
