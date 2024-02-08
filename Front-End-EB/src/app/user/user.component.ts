import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BillService } from '../bill.service';
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  displayedColumns: string[] = ['billNo', 'electroboardId', 'amount', 'billDate', 'billStatus', 'accountNo','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginatorModule) paginator!: MatPaginatorModule;
  @ViewChild(MatSort) sort!: MatSort;
  BillForm: any;

  constructor(private dialog: MatDialog, private bill: BillService) {

  }
  ngOnInit(): void {
    this.getAllBills();
  }
  openDialog() {
    this.dialog.open(Dialog2Component, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllBills();
      }
    })
  }
  getAllBills() {
    this.bill.getBill()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);

        },
        error: (err) => {
          alert("Error while fetching the Records!!")
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

  download(){
    alert("Your Bill downloaded Successfully!");
  }
}
