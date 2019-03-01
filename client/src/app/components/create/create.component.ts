import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer/customer.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      firstName: '',
      lastName:'',
      birthday: '',
      gender: '',
    });
  }

  addCustomer() {
    var formElements = this.createForm.value;
    var name = {
      "first":formElements.firstName,
      "last": formElements.lastName
    }
    this.customerService.addCustomer(null, name, formElements.birthday, formElements.gender, new Date(), 0).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
