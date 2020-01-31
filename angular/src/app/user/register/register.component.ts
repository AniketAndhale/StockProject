import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register : FormGroup;
  registerUser: any;
  constructor(private formbuilder : FormBuilder,private userService : ServicesService) { }

  ngOnInit() {
    this.register = this.formbuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone :['',Validators.required]




















































      
    })
  }
  addUser(){
this.userService.saveUser(this.registerUser.value).subscribe(data =>{
  console.log('User inserted successfully'+data)
})
  }
    
  onSubmit()
  {
    console.log(this.register.value)
  }

}
