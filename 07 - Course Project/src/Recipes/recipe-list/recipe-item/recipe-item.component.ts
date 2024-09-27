import { Component } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input({required:true}) inRecept!:Recipe;
}
