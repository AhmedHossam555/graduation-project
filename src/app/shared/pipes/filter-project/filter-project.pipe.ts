import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProject',
  standalone: true
})
export class FilterProjectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
