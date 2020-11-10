import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
      console.log('No Users Found... Creating New Users...');
      let usrs = [
        {

          name: 'Shubham Jangid',
          phone: '123-456-7890'
        },
        {

          name: 'Abc',
          phone: '1234567890'
        },
        {

          name: 'abcdefg',
          phone: '123-123-4568'
        },
      ];

      localStorage.setItem('users', JSON.stringify(usrs));
      return
    } else {
      console.log(JSON.parse(localStorage.getItem('users'))
      )
      console.log('Found employees...');
    }
  }

  getUsers() {
    let user = JSON.parse(localStorage.getItem('users'));
    return user;
  }

  addUser(newUser) {
    let usrs = JSON.parse(localStorage.getItem('users'));
    //  if (usrs === null || usrs == undefined) {

    //  }
    usrs.push(newUser);
    localStorage.setItem('users', JSON.stringify(usrs));
  }

  deleteUser(index) {
    let usrs = JSON.parse(localStorage.getItem('users'));

    usrs.splice(index, 1);

    localStorage.setItem('users', JSON.stringify(usrs));
    this.getUsers()
  }

  updateUser(oldUser, newUser) {
    let usrs = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < usrs.length; i++) {
      if (usrs[i].id == oldUser.id) {
        usrs[i] = newUser;
      }
    }
    localStorage.setItem('users', JSON.stringify(usrs));
  }

}
