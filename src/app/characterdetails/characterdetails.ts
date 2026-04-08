import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../models/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails {
  @Input() character: Character | null = null;
}