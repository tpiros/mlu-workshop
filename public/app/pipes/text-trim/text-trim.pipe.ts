import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'trim'})

export class TrimPipe implements PipeTransform {
  transform(text: string, numberOfChars: number = 25): string {
    return `${text.split('').slice(0, numberOfChars).join('')} ...`;
  }
}