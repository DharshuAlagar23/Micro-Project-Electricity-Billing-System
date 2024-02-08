import { Component, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { AddressService } from '../address.service';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
openDialog1() {
throw new Error('Method not implemented.');
}
openDialog2() {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = ['doorNo', 'street', 'city', 'state', 'pinCode', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
  @ViewChild(MatSort) sort!: MatSort;
  addressForm: any;

  constructor(private dialog : MatDialog, private address : AddressService){

  }
  ngOnInit():void{
    this.getAllAddresss();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'save'){
          this.getAllAddresss();
        }
      })
  }
  getAllAddresss(){
    this.address.getAddress()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        
      },
      error:(err)=>{
        alert("Data Feteched Successfully!!")
      }
    })
  }
  editAddress(row : any){
    this.dialog.open(DialogComponent,{
      width : '30%', 
      data:row
    }).afterClosed().subscribe(val=>
      {
        if(val=== 'update'){
          this.getAllAddresss();
        }
      }) 
  }

  deleteAddress(data:any){
    this.address.deleteAddress(data)
    .subscribe({
      next:(res)=>{
        alert("Address Deleted Successfully");
        this.getAllAddresss();
      },
      error:()=>{
        alert('Address Deleted Successfully');
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


