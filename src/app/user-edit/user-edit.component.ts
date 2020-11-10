import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

   editform;
  constructor(private userdata: UserdataService, private formBuilder: FormBuilder,private router: Router) {
      this.editform = this.formBuilder.group({
        name: JSON.parse(localStorage.getItem('editable_user')).name,
        phone: JSON.parse(localStorage.getItem('editable_user')).phone
      });
     }

  ngOnInit(): void {
   
  }
onSubmit(){
  alert('Your form has been submitted'!);
  console.log(this.editform.value)
  this.userdata.addUser(this.editform.value)
  console.log(this.editform.value.name+ ' ' + this.editform.value.phone)
}

}
