import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServiceService]
})
export class AppComponent {
  title = 'mutant';

  constructor(private router: Router) {}
  list() {
    this.router.navigate(['list']);
  }
  add() {
    this.router.navigate(['add']);
  }
}
