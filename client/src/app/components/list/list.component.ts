import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: Customer[];
  displayedColumns = ['name', 'birthday', 'gender', 'lastContact', 'customerLifetimeValue','actions'];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService
    .getCustomers()
    .subscribe((data: Customer[]) => {
      this.customers = data;
      console.log('Data requested ... ');
      console.log(this.customers);
    });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.fetchCustomers();
    });
  }

}
