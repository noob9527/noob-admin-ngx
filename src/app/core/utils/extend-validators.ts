import { AbstractControl, FormControl } from '@angular/forms';


const ID_NUMBER = /^(?:\d{17}|\d{14})(?:\d|x)$/;

export class ExtendValidators {
  static confirmPassword(passwordKey: string, confirmPasswordKey: string) {
    return (AC: AbstractControl) => {
      const firstValue = AC.get(passwordKey)!.value;
      const secondValue = AC.get(confirmPasswordKey)!.value;
      if (firstValue === secondValue)
        return null;
      else
        return AC.get(confirmPasswordKey)!.setErrors({ misMatch: true });
    };
  }

  static idNumber(input: FormControl) {
    const { value } = input;
    if (value == null) return null;
    return ID_NUMBER.test(value) ? null : { idNumber: value };
  }
}
