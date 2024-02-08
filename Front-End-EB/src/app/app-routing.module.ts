import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path : 'Home',component:HomeComponent},{path :'Login',component:LoginComponent},{path :'Register',component:RegisterComponent},
                        {path:'address', component:AddressComponent},
                        {path:'account', component:AccountComponent},
                        {path:'bill', component:BillComponent},
                        {path: 'user', component:UserComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
