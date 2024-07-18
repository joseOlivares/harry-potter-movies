import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'million',
  standalone: true
})
export class MillionPipe implements PipeTransform {

  transform(value: string='0'): string {
    return `$${value} million`;
  }

}
