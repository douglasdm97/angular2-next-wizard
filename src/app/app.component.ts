import { Component } from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng-formly';

@Component({
	selector: 'next-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	form: FormGroup = new FormGroup({});
	userFields: FormlyFieldConfig = [{
		className: 'row',
		wrappers:['box'],
		fieldGroup: [{
			className: 'col-xs-6',
			key: 'email',
			type: 'next-input',
			templateOptions: {
				type: 'email',
				label: 'Email address',
				placeholder: 'Enter email'
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		}]
	}];

	user = {
		email: 'email@gmail.com'
	};

	submit(user) {
		console.log(user);
	}
}
