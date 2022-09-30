import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';


@Directive({
  selector: '[forbiddenDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenDateDirective, multi: true}]
})
export class ForbiddenDateDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return createForbiddenDateValidator()(control);
}

}

export function createForbiddenDateValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      let day = new Date(control.value)

      const saturdayDate = day.getDay() == 6;
      const sundayDate = day.getDay() == 0;
      
      if(saturdayDate) {
        return {saturdayDate:true} 
      } else if(sundayDate) {
        return {sundayDate:true}
      } else {
        return null;
      }
  }
}
