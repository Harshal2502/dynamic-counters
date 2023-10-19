import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counterNumber: number = 0;
  @Input() flag: boolean = false;
  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
      this.counterValue--;
  }
}
