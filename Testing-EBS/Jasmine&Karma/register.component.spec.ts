import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from '../account/account.component';
import { AddressComponent } from '../address/address.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BillComponent } from '../bill/bill.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent,AppComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        AddressComponent,
        AccountComponent,
        Dialog1Component,
      Dialog2Component,Dialog3Component,BillComponent,HomeComponent],
      
      imports:[BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule, MatToolbarModule, MatIconModule,
        MatSelectModule,MatButtonModule, MatDialogModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
        HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, HttpClientTestingModule],
     
    });
  
  fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should have as title 'RegisterComponent'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RegisterComponent');
  });


  it('Insert RegisterComponent Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    expect(Register).toBeTruthy();
  });


  it('Insert Register Form GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(7);
  });

  it('Testing Register Form valid', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const Register = fixture.componentInstance;
    Register.registerform.controls?.['userId'].setValue("11953");
    Register.registerform.controls?.['userName'].setValue("Dharshana");
    Register.registerform.controls?.['emailId'].setValue("dharshu@gmail.com");
    Register.registerform.controls?.['address'].setValue("2/656,Sivakasi");
    Register.registerform.controls?.['userType'].setValue("User");
    Register.registerform.controls?.['password'].setValue("dharshus123");
    expect(Register.registerform.valid).toBeFalsy();
  });


  it('Insert Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#registerform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(0);
  });


  it('Register form valid by invalid data',() => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.registerform.controls?.['userId'].setValue(" ");
    app.registerform.controls?.['userName'].setValue(" ");
    app.registerform.controls?.['emailId'].setValue(" ");
    app.registerform.controls?.['address'].setValue(" ");
    app.registerform.controls?.['userType'].setValue(" ");
    app.registerform.controls?.['password'].setValue(" ");
    expect(app.registerform.valid).toBeFalsy();
  });

});
