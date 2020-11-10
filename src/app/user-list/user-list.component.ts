import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserdataService} from '../userdata.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userdata: UserdataService, private router: Router) {
    if(localStorage.getItem('users')==null || localStorage.getItem('users')==undefined){
      router.navigate(['../createuser'])
    }
   }
users:any;
usr;
  ngOnInit(): void {
    this.users = this.userdata.getUsers();
  }
  onEdit(index : number){ 
   
    // this.userdata.updateUser(index, );
    var users_data = this.userdata.getUsers()
    console.log(users_data[index])
    localStorage.setItem('editable_user', JSON.stringify(users_data[index]))
    this.router.navigate(['../edituser']);  
//     console.log(var2)
//  this.usr = this.users.find(data =>data.phone == var2)
//  console.log(this.usr)
    
 }
 
 onDelete(index : number){ 
  var response = confirm('Are you sure to delete this user??')
  if(response){
  this.userdata.deleteUser(index);
  window.location.reload()
  }
//     console.log(var2)
//  this.usr = this.users.find(data =>data.phone == var2)
//  console.log(this.usr)
  
}
}
