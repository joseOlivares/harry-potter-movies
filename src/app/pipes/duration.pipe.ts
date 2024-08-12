import { Pipe, PipeTransform } from '@angular/core';
import { MovieDuration } from '../types/types';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: MovieDuration='0'): string {
      const hours = Math.floor( Number(value) / 60); //getting hours
      const minutes = Number(value) % 60;// getting minutes
      return `${hours}h ${minutes}min`;
  }

}
