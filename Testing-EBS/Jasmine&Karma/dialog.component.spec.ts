import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterComponent } from '../register/register.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { AddressComponent } from '../address/address.component';
import { AccountComponent } from '../account/account.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { BillComponent } from '../bill/bill.component';
import { HomeComponent } from '../home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { BillService } from '../bill.service';
import { AccountService } from '../account.service';
import { AddressService } from '../address.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
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
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          BillService,AccountService,AddressService,AccountService,LoginService,RegisterService
      ]
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should have as title 'DialogComponent'`, () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DialogComponent');
  });


  it('Insert Address Component Test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Address = fixture.componentInstance;
    expect(Address).toBeTruthy();
  });


  it('Insert Address Form GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#addressForm");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(4);
  });

  it('Testing Insert Address Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Address = fixture.componentInstance;
    Address.addressForm.controls?.['doorNo'].setValue("321");
    Address.addressForm.controls?.['street'].setValue("Vnr");
    Address.addressForm.controls?.['city'].setValue("Madurai");
    Address.addressForm.controls?.['state'].setValue("TamilNadu");
    Address.addressForm.controls?.['pinCode'].setValue("369852");
   
    expect(Address.addressForm.valid).toBeTruthy();
  });


  it('Testing Update Address Form valid', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Address = fixture.componentInstance;
    Address.addressForm.controls?.['doorNo'].setValue("321");
    Address.addressForm.controls?.['street'].setValue("Vnr");
    Address.addressForm.controls?.['city'].setValue("Madurai");
    Address.addressForm.controls?.['state'].setValue("TamilNadu");
    Address.addressForm.controls?.['pinCode'].setValue("369852");
   
    expect(Address.addressForm.valid).toBeTruthy();
  });






  it('Insert Event Form Button GUI count', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#addressForm");
    const inputElements = formElement.querySelectorAll("mat-option");
    expect(inputElements.length).toEqual(0);
  });


});

