import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,HttpClientModule],
  providers:[AuthService,AuthGuard],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  userName = ''
  password = '';
  error = '';
  constructor(public authService:AuthService,public route:Router){
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    });
  }

  userLogin(){
   this.userName = this.loginForm.controls['username'].value;
   this.password = this.loginForm.controls['password'].value;
   this.authService.login(this.userName, this.password)
      .subscribe(
        response => {
          if(response){
            const data = response;
            localStorage.setItem('auth_token', response?.token);
            delete data?.token;
            this.route.navigateByUrl('/dashboard');
          }
        },
        error => {
          this.error = 'Invalid username or password';
        }
      );
  }

  ngOnInit(): void {
    
  }
}
