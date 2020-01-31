import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  // transform(digit:number,power:number): any {
  //   return Math.pow(digit,power);
  // }

  transform(msg:string,power:number): any {
    return msg.length;
  }

}
