import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  standalone: true,
  imports: [CommonModule],
  providers:[AuthGuard,HttpClient],
  templateUrl: './fibonacci.component.html',
  styleUrl: './fibonacci.component.scss'
})
export class FibonacciComponent {

   num1= 0;
   num2= 1;
   fibonacciSeries: number[] = [];
   fib :boolean = false;
   generateFabonacci(number:any){
    this.fib = false;
  this.fibonacciSeries = [this.num1, this.num2];

  while (this.num2 <= number.value) {
    let temp = this.num1 + this.num2;
    if (temp <= number.value) {
      this.fibonacciSeries.push(temp);
      this.fib = true;
    }
    this.num1 = this.num2;
    this.num2= temp;
  }

   }
}
