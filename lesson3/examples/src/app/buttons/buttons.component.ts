import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   gold: boolean = true;
   silver: boolean = true;
   copper: boolean = true;

   constructor() { }

   ngOnInit() { }

   resetButtons(){
      this.gold = true;
      this.copper = true;
      this.silver = true;
   }

}
