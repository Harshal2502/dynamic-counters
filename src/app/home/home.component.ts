import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCounters: boolean = true;
  counters: number[] = [1, 2];

  toggleCounters() {
    this.showCounters = !this.showCounters;
  }

  addCounter() {
    this.counters.push(this.counters.length + 1);
  }
}
