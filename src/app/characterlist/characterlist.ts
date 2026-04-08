import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../models/character';
import { HarrypotterService } from '../services/harrypotter.service';
import { Characterfilter } from '../characterfilter/characterfilter';
import { Characterdetails } from '../characterdetails/characterdetails';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    Characterfilter,
    Characterdetails
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters: Character[] = [];
  selectedCharacter: Character | null = null;
  loading = false;
  error = '';

  constructor(private harryPotterService: HarrypotterService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading = true;
    this.error = '';

    this.harryPotterService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Characters load error:', err);
        this.error = 'Failed to load characters.';
        this.loading = false;
      }
    });
  }

  filterByHouse(house: string): void {
    this.loading = true;
    this.error = '';
    this.selectedCharacter = null;

    this.harryPotterService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Filter error:', err);
        this.error = 'Failed to filter characters.';
        this.loading = false;
      }
    });
  }

  resetFilter(): void {
    this.selectedCharacter = null;
    this.loadAllCharacters();
  }

  showDetails(character: Character): void {
    this.selectedCharacter = character;
  }
}