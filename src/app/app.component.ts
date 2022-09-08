import { ClickerComponent } from './components/clicker.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.reset();
  }

  title = 'numberClicker';

  savedNumbers = '';
  currentNumber = 0;

  @ViewChild('clicker')
  clicker!: ClickerComponent;

  reset() {
    console.info('Reseting number to 0');
    this.currentNumber = 0;
    this.savedNumbers = '';
    console.info('Saved numbers >>>>>>>>> ' + this.savedNumbers);
    this.clicker.reset();
  }

  imageClicked(n: number) {
    this.savedNumbers = this.savedNumbers + ' ' + n;
    console.info('Numbers saved >>>> ' + this.savedNumbers);
  }
}
