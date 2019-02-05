import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(public form: FormBuilder) {}

  public buildRegisterForm() {
    this.registerForm = this.form.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.buildRegisterForm();
  }
}
