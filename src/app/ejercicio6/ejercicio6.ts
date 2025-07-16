import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-ejercicio6',
  imports: [MatChipsModule, CdkDropList, CdkDrag],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ejercicio6.html',
  styleUrl: './ejercicio6.css'
})
export class Ejercicio6 {
  readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }
}
