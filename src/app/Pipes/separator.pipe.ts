import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
  standalone: true
})
export class SeparatorPipe implements PipeTransform {

  transform(value:string , sep:string='-'){
    let result = value.split('').join(sep);
    return result;
  }

}


// ['s','d'jadsklj']