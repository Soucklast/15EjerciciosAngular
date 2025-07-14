import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-ejercicio2',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

