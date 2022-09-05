import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css'],
})
export class ClickerComponent implements OnInit {
  image!: string;

  @Input()
  set currentNumber(n: number) {
    console.info(">>>> set: ", n)
    this._currentNumber = n;
    this.updateImage(n);
  }
  get current(): number {
    return this._currentNumber;
  }

  private _currentNumber = 0;

  constructor() {}

  buttonNextDisable!:boolean;
  buttonPrevDisable!:boolean;

  ngOnInit(): void {
    this.updateImage(this._currentNumber);
    if (this._currentNumber== 0){
      this.buttonPrevDisable=true;
    } else {
      this.buttonPrevDisable=false;
    }
  }

  previous() {
    if (this._currentNumber == 0) {
      console.info('This is the lowest number.');
      this.buttonPrevDisable = true;
    } else {
      this._currentNumber--;
      this.buttonPrevDisable = this._currentNumber == 0? true: false;
      this.buttonNextDisable = false;

    }
    this.updateImage(this._currentNumber);
  }

  next() {
    if (this._currentNumber == 30) {
      console.info('This is the highest number.');
      this.buttonNextDisable = true;
    } else {
      this._currentNumber++;
      this.buttonNextDisable = this._currentNumber == 30? true: false;
      this.buttonPrevDisable = false;

    }
    this.updateImage(this._currentNumber);
  }

  @Output()
  onImageClicked = new Subject<number>();

  click() {
    console.info(`Number ${this._currentNumber} Clicked`);
    this.onImageClicked.next(this._currentNumber);
  }

  private updateImage(n: number) {
    console.info(">>> number: ", n)
    this.image = `/assets/numbers/number${n}.jpg`;
  }
}
