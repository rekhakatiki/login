import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { AnagramComponent } from './anagram/anagram.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'fabonacci', component: FibonacciComponent, canActivate: [AuthGuard] },
    { path: 'anagram', component: AnagramComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login' }
];
