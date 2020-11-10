import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {UserdataService} from '../userdata.service'


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
userform
  constructor(private userdata: UserdataService, private formBuilder: FormBuilder,
    ) {
      this.userform = this.formBuilder.group({
        name: '',
        phone: ''
      });
     }
usrs;
  ngOnInit(): void {
    this.usrs = this.userdata.getUsers();

  }
onSubmit(){
  
    alert('Your form has been submitted'!);
    console.log(this.userform.value)
    this.userdata.addUser(this.userform.value)
    console.log(this.userform.value.name + this.userform.value.phone)
    
}
onCancel(){
  alert('Please Enter the details, as your form has been refreshed!');
  this.userform.reset();  
}

}
