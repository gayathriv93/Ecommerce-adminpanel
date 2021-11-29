import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
// address:FormGroup=this.fb.group({
//   streetAddress1:['',[Validators.required]],
//   streetAddress2:[''],
//   city:['',[Validators.required]],
//   state:['',[Validators.required]],
//   postalCode:['',[Validators.required]],
// })

  Newuser:FormGroup= this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    contactNo:['',[Validators.required,Validators.minLength(10)]],
    emailId:['',[Validators.required,Validators.email]],
    userName:['',[Validators.required]],
    password:['',[Validators.required]],
    address:this.fb.group({
      streetAddress1:['',[Validators.required]],
      streetAddress2:[''],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      postalCode:['',[Validators.required]],
    })
    


  })

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.Newuser.value)
}
}
