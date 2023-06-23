import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // constructor() {}


  policies: string[]; // Array to hold the list of policies

  constructor() {
    this.policies = [
      'Terms and conditions',
      'Do Not Call Registry Disclaimer',
      'Multilingual Disclaimer',
      'Code of Commitment',
      'Group Code of Business Conduct and Ethics',
      'Customer Service Policies',
      'Use of Unparliamentary Language by Customers',
      'Privacy',
      'Fair Practice Code for Lenders'
    ];
  }


  selectedOption: string = 'name';
  searchValue: string = '';
  searchPlaceholder: string = 'Enter a movie name';
  search() {
    if (this.selectedOption === 'name') {
      console.log('Searching by name:', this.searchValue);
    } else if (this.selectedOption === 'date') {
      console.log('Searching by date:', this.searchValue);
    }
  }
  onSelectedOptionChange() {
    this.searchValue = ''; // Clear the search field
    if (this.selectedOption === 'name') {
      this.searchPlaceholder = 'Enter a movie name';
    } else if (this.selectedOption === 'date') {
      this.searchPlaceholder = 'Enter a date';
    }
  }
}
