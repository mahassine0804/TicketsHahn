import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('adminPassword')?.value;
    const confirmPassword = control.get('confirmadminPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}