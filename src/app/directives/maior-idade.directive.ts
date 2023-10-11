import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoNascimentoMais18 = anoNascimento + 18;
    const anoAtual = new Date().getFullYear();

    const eMaior = anoNascimentoMais18 <= anoAtual;

    return eMaior ? null : {'maiorIdadeValidator' : true};
  }
}
