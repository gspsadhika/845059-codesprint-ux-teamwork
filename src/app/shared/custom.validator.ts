import { AbstractControl } from '@angular/forms';

export function onlyText(control: AbstractControl): {[key:string]: any} | null {
    const isValid = /^[a-zA-Z]*$/.test(control.value)
    return isValid ? null : {"isNotText": true}
}

export function onlyNumber(control: AbstractControl): {[key:string]: any} | null {
    const isValid = /^[0-9]*$/.test(control.value)
    return isValid ? null : {"isNotNumber": true}
}