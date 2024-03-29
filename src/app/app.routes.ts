import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { AnagramComponent } from './anagram/anagram.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login' , component:LoginComponent},
    { path : 'dashboard' , component:DashboardComponent },
    { path :'fabonacci' ,component:FibonacciComponent},
    { path : 'anagram' , component:AnagramComponent},
    { path: '**', redirectTo: '/login' }
];
