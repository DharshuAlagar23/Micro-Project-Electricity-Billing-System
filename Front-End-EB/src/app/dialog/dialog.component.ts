import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  addressForm !: FormGroup;
  actionBtn : string = "Save";

  
  constructor(private formBuilder : FormBuilder, 
    private address : AddressService, 
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<DialogComponent>){ 
  
  
  this.addressForm = this.formBuilder.group({
      doorNo:['',Validators.required],
      street : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      pinCode : ['', Validators.required]
    });
  
    if(this.editData){
      this.actionBtn = "Update";
      this.addressForm.controls['doorNo'].setValue(this.editData.doorNo);
      this.addressForm.controls['street'].setValue(this.editData.street);
      this.addressForm.controls['city'].setValue(this.editData.city);
      this.addressForm.controls['state'].setValue(this.editData.state);
      this.addressForm.controls['pinCode'].setValue(this.editData.pinCode);
      
    }
  }
  insertAddress(){
    if(!this.editData){
      if(this.addressForm.valid){
        this.address.postAddress(this.addressForm.value)
        .subscribe({
          next:(res) => {
            alert("Address added successfully")
            this.addressForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the Details")
          }
        })
      }}else{
        this.updateAddress()
      }
    }
    updateAddress(){
      this.address.putAddress(this.addressForm.value, this.editData.doorNo)
      .subscribe({
        next :(res)=>{
          alert("Address updated Successfully");
          this.addressForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>
        {
          alert("error while updating the record!!");
        }
      })
    }  
}
