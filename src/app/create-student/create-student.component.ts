import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

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
        )
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
