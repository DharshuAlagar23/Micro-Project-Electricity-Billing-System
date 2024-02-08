import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css'
})
export class Dialog2Component {
  billForm !: FormGroup;
  actionBtn : string = "Save";

  
  constructor(private formBuilder : FormBuilder, 
    private bill : BillService, 
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<Dialog1Component>){ 
  
  
  this.billForm = this.formBuilder.group({
    billNo:['',Validators.required],
    electroboardId : ['', Validators.required],
    amount : ['', Validators.required],
    billDate : ['', Validators.required],
    billStatus : ['', Validators.required],
    accountNo : ['', Validators.required]

      
    });
  
    if(this.editData){
      this.actionBtn = "Update";
      this.billForm.controls['billNo'].setValue(this.editData.billNo);
      this.billForm.controls['electroboardId'].setValue(this.editData.electroboardId);
      this.billForm.controls['amount'].setValue(this.editData.amount);
      this.billForm.controls['billDate'].setValue(this.editData.billDate);
      this.billForm.controls['billStatus'].setValue(this.editData.billStatus);
      this.billForm.controls['accountNo'].setValue(this.editData.accountNo);
      
    }
  }
  insertBill(){
    if(!this.editData){
      if(this.billForm.valid){
        this.bill.postBill(this.billForm.value)
        .subscribe({
          next:(res) => {
            alert("Bill added successfully")
            this.billForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Bill Payment Successfully")
          }
        })
      }}else{
        this.updateBill()
      }
    }
    updateBill(){
      this.bill.putBill(this.billForm.value, this.editData.billId)
      .subscribe({
        next :(res)=>{
          alert("Bill updated Successfully");
          this.billForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>
        {
          alert("error while updating the record!!");
        }
      })
    }  



}
