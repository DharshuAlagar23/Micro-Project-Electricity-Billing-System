import { Component, NgModule } from '@angular/core';

import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  user:User;
  myform:FormGroup;
  flag:boolean=false;
 
  constructor(private service:LoginService,private router:Router) {


    this.myform = new FormGroup(
      {
        emailId: new FormControl('', [Validators.required, Validators.pattern('')]),
        password:new FormControl('',[Validators.required,Validators.pattern('')]),
      }
    );
 
     this.user=new User();
  }




  login (data:any){
   this.user.emailId=data.emailId;
   this.user.password=data.password;


  this.service.login(this.user).subscribe(
    (resultdata:any)=> {
      console.log(resultdata)


      if(resultdata.message=="Admin Success"){
         this.router.navigate(['/address']);
      } else if(resultdata.message=="User Success"){
        this.router.navigate(['/user']);
      }
      else{
        alert("Invalid User");
      }
    }
   );
  }


  changediv(){
    this.flag=!this.flag;
  }


}
