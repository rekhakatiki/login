import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  providers:[AuthGuard,AuthService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(public route:Router){}
  fibonacciSeries(){
    this.route.navigateByUrl('/fabonacci')
    
  }
  checkAnagram(){
    this.route.navigateByUrl('/anagram')
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
}
