import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'next-field-input',
  template: `
    <input [type]="type" [formControl]="formControl" class="form-control"
      [formlyAttributes]="field" [ngClass]="{'form-control-danger': valid}">
    `,
})
export class NextFieldInput extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}