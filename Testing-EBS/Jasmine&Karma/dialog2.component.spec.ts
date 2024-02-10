import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog2Component } from './dialog2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { AccountService } from '../account.service';
import { AccountComponent } from '../account/account.component';
import { AddressService } from '../address.service';
import { AddressComponent } from '../address/address.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BillService } from '../bill.service';
import { BillComponent } from '../bill/bill.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from '../register.service';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';

describe('Dialog2Component', () => {
  let component: Dialog2Component;
  let fixture: ComponentFixture<Dialog2Component>;

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
    fixture = TestBed.createComponent(Dialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should have as title 'Dialog2Component'`, () => {
    const fixture = TestBed.createComponent(Dialog2Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dialog2Component');
  });


  it('Insert Bill Component Test', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const Bill = fixture.componentInstance;
    expect(Bill).toBeTruthy();
  });


  // it('Insert Bill A Form GUI count', () => {
  //   const fixture = TestBed.createComponent(Dialog1Component);
  //   const formElement = fixture.debugElement.nativeElement.querySelector("#billForm");
  //   const inputElements = formElement.querySelectorAll("input");
  //   expect(inputElements.length).toEqual(6);
  // });

  it('Testing Insert Bill Form valid', () => {
    const fixture = TestBed.createComponent(Dialog2Component);
    const Bill = fixture.componentInstance;
    Bill.billForm.controls?.['billNo'].setValue("104");
    Bill.billForm.controls?.['electroboardId'].setValue("1005");
    Bill.billForm.controls?.['amount'].setValue("60000");
    Bill.billForm.controls?.['billDate'].setValue("05-09-2024");
    Bill.billForm.controls?.['billStatus'].setValue("Paid");
    Bill.billForm.controls?.['accountNo'].setValue("854632197");
  
   
    expect(Bill.billForm.valid).toBeTruthy();
  });


  it('Testing Update Bill Form valid', () => {
    const fixture = TestBed.createComponent(Dialog2Component);
    const Bill = fixture.componentInstance;
    Bill.billForm.controls?.['billNo'].setValue("104");
    Bill.billForm.controls?.['electroboardId'].setValue("1005");
    Bill.billForm.controls?.['amount'].setValue("60000");
    Bill.billForm.controls?.['billDate'].setValue("05-09-2024");
    Bill.billForm.controls?.['billStatus'].setValue("Paid");
    Bill.billForm.controls?.['accountNo'].setValue("854632197");   
   
    expect(Bill.billForm.valid).toBeTruthy();
  });






  it('Insert Bill Form Button GUI count', () => {
    const fixture = TestBed.createComponent(Dialog2Component);
    const formElement = fixture.debugElement.nativeElement.querySelector("#billForm");
    const inputElements = formElement.querySelectorAll("input");
    const inputElements1 = formElement.querySelectorAll("mat-option");
    expect(inputElements1.length).toEqual(0);
    expect(inputElements.length).toEqual(6);
  });
});
