import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'linestring'})
export class ArrayToLinePipe implements PipeTransform {
  transform(value: string[] | null | undefined): string {
    if(value && value.length > 1) {
      let result = '';

      value.forEach(x => {
        result += x;
        result += "\n";
      })

      return result;
    }
    else { return ''; }
  }
}
