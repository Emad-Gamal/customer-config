import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// Service class consuming CRUD operations using HttpClient Module
export class CustomerService {

  uri = '/api';

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return this.http.get(`${this.uri}/customer`);
  }

  getCustomerById(id) {
    return this.http.get(`${this.uri}/customer/${id}`);
  }

  addCustomer(customerID, name, birthday, gender, lastContact, customerLifetimeValue) {
    const customer = {
      customerID: customerID,
      name: name,
      birthday: birthday,
      gender: gender,
      lastContact: lastContact,
      customerLifetimeValue: customerLifetimeValue
    };
    return this.http.post(`${this.uri}/customer`, customer);
  }

  updateCustomer(id, name, birthday, gender) {
    const customer = {
      name: name,
      birthday: birthday,
      gender: gender
    };
    return this.http.put(`${this.uri}/customer/${id}`, customer);
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.uri}/customer/${id}`);
  }
}
