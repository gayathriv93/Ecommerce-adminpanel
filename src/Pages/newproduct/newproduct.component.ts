import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  // user = this.fb.group({
  //   firstName: ['', [Validators.required]],
  //   lastName: ['', [Validators.required]],
  //   contactNo: ['', [Validators.required]],
  //   emailId: ['', [Validators.required]],
  // })

  productForm: FormGroup = this.fb.group({
    user: this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
    }),
    brandName: ['', [Validators.required]],
    brandId: ['', [Validators.required]],
    catelogue: [''],
    logo: [''],
    price: ['', [Validators.required]],
    maskedPrice: [''],
    offerPrice: [''],
    taxAmt: ['', [Validators.required]],
    taxPercentage: [''],
    availability: ['', [Validators.required]],
    color: ['', [Validators.required]],
    size: ['', [Validators.required]],
    productDescription: ['', [Validators.required]],

  })

  ngOnInit(): void {
  }
  onFileChanged(event: any) {
    const file = event.target.files[0]
  }
  handleProductSubmit(): void {
    console.log(this.productForm.value)
  }
}
