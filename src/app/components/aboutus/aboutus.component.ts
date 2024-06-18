import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private router: Router) {
  }

  goToHomePage() {
    // write your logic to be executed before we route to home screen
    console.log('Do something');
    this.router.navigate(['/home']);
  }
}
