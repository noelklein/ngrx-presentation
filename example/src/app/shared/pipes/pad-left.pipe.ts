import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform {

  transform(value: string, template: string): string {
    return String(template + value).slice(template.length * -1);
  }

}
