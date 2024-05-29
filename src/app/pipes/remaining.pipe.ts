import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true,
  // pure: false
})
export class RemainingPipe implements PipeTransform {
  transform(input: string, maxLength: any = 100) {
    console.log('remaining pipe called...')
    return maxLength - input.length;
  }
}
