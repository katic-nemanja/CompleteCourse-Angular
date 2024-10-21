import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from '../../app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ammountInput') ammountInput: ElementRef;

  @Output() onOutIngredient = new EventEmitter<Ingredients>();



  onIngredientAdded(){
    this.onOutIngredient.emit({name: this.nameInput.nativeElement.value, ammount: this.ammountInput.nativeElement.value});
  }
}
