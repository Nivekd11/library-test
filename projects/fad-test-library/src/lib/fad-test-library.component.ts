import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface Configuration {
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  value?: string;
}

@Component({
  selector: 'ng-fad-test-library',
  template: `
    <input [style.font-size.px]="configuration.fontSize"
       [style.color]="configuration.fontColor"
       [style.font-family]="configuration.fontFamily"
       (click)="oncomplete.emit($event)"
       (error)="onerror.emit($event)"
       [value]="configuration.value"
       >
  `,
  styles: [
  ]
})
export class FadTestLibraryComponent implements OnInit {

  @Input() configuration: Configuration ={};
  @Output() onerror = new EventEmitter<Event>();
  @Output() oncomplete = new EventEmitter<Event>();
  
  constructor() { }

  ngOnInit(): void {
  }




}
