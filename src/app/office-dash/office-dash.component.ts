import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { OfficeData } from './office.model';

@Component({
  selector: 'app-office-dash',
  templateUrl: './office-dash.component.html',
  styleUrls: ['./office-dash.component.css'],
})
export class OfficeDashComponent implements OnInit {
  formValue!: FormGroup;
  officeModelObj: OfficeData = new OfficeData();
  allOfficeData: any;
  showAdd!:boolean;
  showbtn!:boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAllData()
  }

  clickAddOffice(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }

  addOffice(){
    this.officeModelObj.name = this.formValue.value.name;
    this.officeModelObj.email = this.formValue.value.email;
    this.officeModelObj.mobile = this.formValue.value.mobile;
    this.officeModelObj.address = this.formValue.value.address;
    this.officeModelObj.services = this.formValue.value.services;
  
    this.api.postOffice(this.officeModelObj).subscribe(res=>{
      console.log(res);
      alert("Office Records Added Successfully!");
      let ref = document.getElementById('clear');
      ref?.click();


      this.formValue.reset ()
      this.getAllData();
    },
    err=>{
      alert("Office Records Update Failed!");
    }
    )
  }


  getAllData(){
    this.api.getOffice().subscribe(res=>{
      this.allOfficeData = res;
    })
  }

  deleteOffice(data:any){
    this.api.deleteOffice(data.id).subscribe(res=>{
      alert("Office Records Deleted!")
      this.getAllData();
    })
  }

  onEditOffice(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.officeModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  updateOffice(){
    this.officeModelObj.name = this.formValue.value.name;
    this.officeModelObj.email = this.formValue.value.email;
    this.officeModelObj.mobile = this.formValue.value.mobile;
    this.officeModelObj.address = this.formValue.value.address;
    this.officeModelObj.services = this.formValue.value.services;
  
    this.api.updateOffice(this.officeModelObj,this.officeModelObj.id).subscribe(res=>{
      alert("Office Records Updated!");
      let ref = document.getElementById('clear');
      ref?.click();


      this.formValue.reset ()
      this.getAllData();
    })
  }

}


