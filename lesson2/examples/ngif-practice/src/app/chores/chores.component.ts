import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ["Make a sandwich", "Watch TV", "Read a book","Go running", "eat some candy", 'stop adding more chores'];

   targetImage = "/assets/target.jpeg";

   constructor() { }

   ngOnInit() {
   }

}
