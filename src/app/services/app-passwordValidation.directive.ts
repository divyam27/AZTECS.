import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value === confirmPassword.value ? { notmatch: true } : null;
};

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[passwordValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidation, multi: true }]
})
// tslint:disable-next-line: directive-class-suffix
export class PasswordValidation implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        return identityRevealedValidator(control)
    }
}


