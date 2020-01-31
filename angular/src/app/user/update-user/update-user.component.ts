import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { User } from 'src/app/models/user';

import { Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser : FormGroup

  constructor(private formBuilder: FormBuilder, private service:ServicesService ,private router:Router) { }

  ngOnInit() {
    this.updateUser=this.formBuilder.group({
      id :[],
      name :['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required]
    
    });
    const id=localStorage.getItem('userId');
    if(+id>0){
      this.service.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
      });
      

    }
   
  }
  updateTheUser(){    
    this.service. updateUserInfo  (this.updateUser.value).subscribe(u =>{
      this.router.navigate(['user'])

    });
  }

}
