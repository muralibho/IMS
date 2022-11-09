import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
submit() {
throw new Error('Method not implemented.');
}

  public studentForm:FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.minLength(8), Validators.maxLength(10)]),
      gender: new FormControl(),
      mobile: new FormControl(null, [Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl(),
      batch: new FormControl(),
      address: new FormGroup(
        {
          city: new FormControl(),
          mandal: new FormControl(),
          distrit: new FormControl(),
          state: new FormControl(),
          Pincode: new FormControl()
        }
        ),
        company: new FormControl(
          {
            name: new FormControl(),
            location: new FormControl(),
            package: new FormControl(),
            offerDate:new FormControl()
        }
        ),
        educations: new FormArray([]),
        sourceType: new FormControl(),
        sourceForm: new FormControl(),
        referalName: new FormControl()
      }
  )
     
  get educationsFormArray(){
    return this.studentForm.get('educations') as FormArray;

  }
  add(){
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl()
        }
      )
    )
  }
  
    delete(i:number){
      this.educationsFormArray.removeAt(i);
    }
  

  constructor() { }

  ngOnInit(): void {
  }

  Submit(){
    console.log(this.studentForm);
    this.studentForm.markAllAsTouched();
   }
   
}
