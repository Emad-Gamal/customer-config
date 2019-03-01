import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Customer } from '../../models/customer.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  customer: any = {};
  updateForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.customerService.getCustomerById(this.id).subscribe(res => {
        this.customer = res;
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      firstName: '',
      lastName:'',
      birthday: '',
      gender: '',
    });
  }

  updateCustomer() {
    var formElements = this.updateForm.value;
    var name = {
      "first":formElements.firstName,
      "last": formElements.lastName
    }
    this.customerService.updateCustomer(this.id, name, formElements.birthday, formElements.gender).subscribe(() => {
      this.snackBar.open('Customer updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }
}
