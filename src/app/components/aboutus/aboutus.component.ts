import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  isDirty: boolean = false;

  constructor(private router: Router) {
  }

  goToHomePage() {
    // write your logic to be executed before we route to home screen
    console.log('Do something');
    this.router.navigate(['/home']);
  }
}
