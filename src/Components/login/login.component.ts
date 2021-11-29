import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Loginform :any= FormGroup;
  Loginform:FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }
  hide = true;
  ngOnInit(): void {
  }

}
