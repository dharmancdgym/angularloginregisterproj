import { Component } from '@angular/core';
import { of } from 'rxjs';
//import { CommonModule } from 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  family = [
     {id: '1', name : 'manoj' , age :45 , isseniorCitizen: false},
     {id: '2', name : 'manish' , age :41 , isseniorCitizen: false},
     {id: '3', name : 'sanjay' , age :49 , isseniorCitizen: false},
     {id: '4', name : 'krishna' , age :68 , isseniorCitizen: true},
     {id: '5', name : 'sukhbir' , age :78 , isseniorCitizen: true},
  ];

  families$ = of(this.family);

}
