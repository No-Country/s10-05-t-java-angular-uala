import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalExpenses',
  standalone: true
})
export class TotalExpensesPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): number {
    let total: number = 0;

    value.forEach(element => {
      total += element.value;
    });

    return total;
  }

}
