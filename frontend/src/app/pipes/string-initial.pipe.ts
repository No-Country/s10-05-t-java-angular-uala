import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringInitial',
  standalone: true
})
export class StringInitialPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.slice(0, 1);
  }

}
