import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includesymbols = false;
  password = ''

  // getting the input from user and converting into number 
  getLength(value:any)
  {
    const parsedValue = parseInt(value);
    
    if(!isNaN(parsedValue))
    {
      this.length = parsedValue;
    }
    console.log(this.length)
  }

  changeLetter(){
    this.includeLetters = !this.includeLetters;

  }

  changeNumber()
  {
    this.includeNumbers = !this.includeNumbers;
  }

  changeSymbol()
  {
    this.includesymbols = !this.includesymbols;
  }
  buttonClick()
  {
    const  allLetters = 'qwertyuioplkjhgfdsazxcvbnm';
    const allSymbols = '!@#$%^&*()_';
    const  allNumbers = '0123456789';

   let validChar = '';

   if(this.includeLetters){
     validChar += allLetters;
   }
   if(this.includeNumbers){
     validChar += allNumbers;
   }
   if(this.includesymbols){
     validChar += allSymbols;
   }

   let gereratedpassword = '';
   for(let i = 0; i<this.length; i++)
   {
     const index = Math.floor(Math.random() * validChar.length);
     console.log(index);
     gereratedpassword += validChar[index];
     
   }

   this.password = gereratedpassword;
   
  }
}
