import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  // inRecept:Recipe = {name:'', description:'', imagePath:''};
  // inRecept:Recipe = <Recipe>{};
  inRecept:Recipe;

  onRecipeOut(recept:Recipe){
    console.log(recept);
    this.inRecept= recept;
  }
}
