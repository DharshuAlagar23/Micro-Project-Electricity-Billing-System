import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressService } from './address.service';
import { AccountComponent } from './account/account.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { MatCardModule } from '@angular/material/card';
import { BillComponent } from './bill/bill.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { UserComponent } from './user/user.component';
import { Dialog3Component } from './dialog3/dialog3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddressComponent,
    DialogComponent,
    AccountComponent,
    Dialog1Component,
    BillComponent,
    Dialog2Component,
    UserComponent,
    Dialog3Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule,
    MatSelectModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
    HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule
  ],
  providers: [AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
