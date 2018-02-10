import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naSafeCallable'
})
export class NaSafeCallablePipe implements PipeTransform {
  transform<T>(input: T, callable: any, defaultValue: any = null): any {
    return typeof callable === 'function'
      ? callable(input)
      : defaultValue;
  }
}
