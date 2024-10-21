import { Component } from '@angular/core';
import { Ingredients } from '../app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredient:Array<Ingredients> = [new Ingredients('Jabuka',10),
    new Ingredients('Kruska',5),
    new Ingredients('Sljiva',8),
    new Ingredients('Musmula',54),
  ];


  newIngredient(sastojak:Ingredients){
    this.ingredient.push(sastojak);
  }
}
