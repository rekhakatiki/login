import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-anagram',
  standalone: true,
  imports: [CommonModule],
  providers:[AuthGuard,AuthService],
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.scss'
})
export class AnagramComponent {
  // printAnagram : any;
  anagramArray :any = [];
  isAnagram: boolean  = false;
  resul1 = 'The Strings are Anagram';
  result2 = 'The Strings are not Anagram'
  anagram(string1:any,string2:any){
    const sortedString1 = string1.value.toLowerCase().split('').sort().join('');
    const sortedString2 = string2.value.toLowerCase().split('').sort().join('');

    this.isAnagram = sortedString1 === sortedString2;
    const result = this.isAnagram ? this.resul1 : this.result2
    const data = {
      'string1': sortedString1,
      'string2': sortedString2,
      'result' : result
    };
    this.anagramArray.push(data);
  }
  onExport(){
    this.exportToExcel(this.anagramArray, 'table_data');
  }
  exportToExcel(data: any[], fileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }
  
}
