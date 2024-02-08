import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User;
  registerform: FormGroup;
  result: string="";
  

  constructor(private service: RegisterService) {
    this.user = new User();
    this.registerform = new FormGroup({
      userId: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]+')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@gmailcom]+')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@gmailcom]+')]),
      address: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]+')]),
      userType: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]+')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9@#$%&*]+'), Validators.maxLength(20), Validators.minLength(14)])
    });
    
  }




  insert(data: any) {
    this.user.userId = data.userId;
    this.user.userName = data.userName;
    this.user.emailId = data.emailId;
    this.user.address = data.address;
    this.user.userType = data.userType;
    this.user.password = data.password;
    this.result = this.service.insert(this.user);




  }

}

