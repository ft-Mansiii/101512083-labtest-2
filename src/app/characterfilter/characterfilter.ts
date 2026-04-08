import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';

  @Output() houseSelected = new EventEmitter<string>();
  @Output() resetSelected = new EventEmitter<void>();

  onFilter(): void {
    if (this.selectedHouse) {
      this.houseSelected.emit(this.selectedHouse);
    }
  }

  onReset(): void {
    this.selectedHouse = '';
    this.resetSelected.emit();
  }
}