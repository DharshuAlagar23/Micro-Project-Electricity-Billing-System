import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddressService } from '../address.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrl: './dialog1.component.css'
})
export class Dialog1Component {

  accountForm !: FormGroup;
  actionBtn : string = "Save";

  
  constructor(private formBuilder : FormBuilder, 
    private account : AccountService, 
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<Dialog1Component>){ 
  
  
  this.accountForm = this.formBuilder.group({
    accountId:['',Validators.required],
    accountNo : ['', Validators.required],
    accountType : ['', Validators.required],
    accountStatus : ['', Validators.required],
      
    });
  
    if(this.editData){
      this.actionBtn = "Update";
      this.accountForm.controls['accountId'].setValue(this.editData.accountId);
      this.accountForm.controls['accountNo'].setValue(this.editData.accountNo);
      this.accountForm.controls['accountType'].setValue(this.editData.accountType);
      this.accountForm.controls['accountStatus'].setValue(this.editData.accountStatus);
      
      
    }
  }
  insertAccount(){
    if(!this.editData){
      if(this.accountForm.valid){
        this.account.postAccount(this.accountForm.value)
        .subscribe({
          next:(res) => {
            alert("Account added successfully")
            this.accountForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the Details")
          }
        })
      }}else{
        this.updateAccount()
      }
    }
    updateAccount(){
      this.account.putAccount(this.accountForm.value, this.editData.accountId)
      .subscribe({
        next :(res)=>{
          alert("Account updated Successfully");
          this.accountForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>
        {
          alert("error while updating the record!!");
        }
      })
    }  

}
