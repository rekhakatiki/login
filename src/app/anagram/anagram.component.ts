import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-anagram',
  standalone: true,
  imports: [CommonModule],
  providers:[AuthGuard,AuthService],
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.scss'
})
export class AnagramComponent {
  isAnagram: boolean | null = null;

  anagram(string1:any,string2:any){
    const sortedString1 = string1.value.toLowerCase().split('').sort().join('');
    const sortedString2 = string2.value.toLowerCase().split('').sort().join('');

    this.isAnagram = sortedString1 === sortedString2;
  }
}
