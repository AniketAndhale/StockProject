import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { ServicesService } from '../user/services.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:ServicesService, private router:Router) { }
  users:User[];
  ngOnInit() {
    //this.users =this.userService.getAllUsers();
    this.userService.getAllUsers().subscribe(data =>
    {
      this.users = data;
    });
  }
  deleteUser(user : User){
    this.userService.deleteUser(user.id).subscribe();
    this.users=this.users.filter(u =>u != user)

  }
  updateUser(user:User){
    localStorage.removeItem('userId');
    localStorage.setItem('userId',user.id.toString());
    this.router.navigate(['update-user']);
  }
}
