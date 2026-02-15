import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child-lab2',
  standalone: true,
  template: `
    <p>Received value: {{ value }}</p>
  `
})
export class ChildComponent implements OnChanges {

  @Input() value!: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      'CHILD: ngOnChanges',
      'Previous:',
      changes['value'].previousValue,
      'Current:',
      changes['value'].currentValue
    );
  }
}
