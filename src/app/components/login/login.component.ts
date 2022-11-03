import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import {Observable} from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = new FormGroup(
    {
       email : new FormControl(null, [Validators.required, Validators.email]),
       password : new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(12)])
    }
  )

  constructor(private _loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      
        (data:any)=>{
             this.router.navigateByUrl("/dashboard");
        },
        (err:any)=>{

        }
      
    )
  }

}
