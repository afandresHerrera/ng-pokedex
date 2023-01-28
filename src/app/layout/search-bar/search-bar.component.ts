import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchEmitter = new EventEmitter<string>();

  emitSearch(value: string): void {
    if (value && value !== '') {
      this.searchEmitter.emit(value);
    } else {
      // void
    }
  }

}
