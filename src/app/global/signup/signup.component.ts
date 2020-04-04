import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators, FormBuilder } from '@angular/forms';
import { identityRevealedValidator } from 'src/app/services/app-passwordValidation.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
 // tslint:disable-next-line: no-unused-expression
 passwordRegx= '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{6,15}$';
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      // tslint:disable-next-line: max-line-length
      mobileNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^\d{10}$/)]),
      // tslint:disable-next-line: max-line-length
      emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      // tslint:disable-next-line: max-line-length
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('')]),
    confirmPassword: new FormControl('', Validators.required),
      date: new FormControl()
  }, { validators: identityRevealedValidator });
  }


ngOnInit() {
}




}
