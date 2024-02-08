import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddressService } from '../address.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AccountService } from '../account.service';
import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
[x: string]: any;

  displayedColumns: string[] = ['accountId', 'accountNo', 'accountType', 'accountStatus',  'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
  @ViewChild(MatSort) sort!: MatSort;
  accountForm: any;

  constructor(private dialog : MatDialog, private account : AccountService){

  }
  ngOnInit():void{
    this.getAllAccounts();
  }
  openDialog() {
    this.dialog.open(Dialog1Component, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllAccounts();
        }
      })
  }
  getAllAccounts(){
    this.account.getAccount()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }
  editAccount(row : any){
    this.dialog.open(Dialog1Component,{
      width : '30%', 
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllAccounts();
        }
      }) 
  }

  deleteAccount(data:any){
    this.account.deleteAccount(data)
    .subscribe({
      next:(res)=>{
        alert("Account Deleted Successfully");
        this.getAllAccounts();
      },
      error:()=>{
        alert('Unable to Delete record');
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
function subscribe(arg0: { next: (res: any) => void; error: () => void; }) {
  throw new Error('Function not implemented.');

}
