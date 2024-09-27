import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipe:Array<Recipe> = [
    new Recipe('Test recepta', 'Opis testnog recepta', 'https://www.ambitiouskitchen.com/wp-content/uploads/2021/06/How-to-Make-Coconut-Rice-6.jpg'), 
    new Recipe('Pirinac', 'Kineski recept', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8793452.jpg&q=60&c=sc&poi=auto&orient=true&h=512'),
    new Recipe('Meso', 'Meso sa prilogom, bogat obrok', 'https://beatthebudget.com/wp-content/uploads/2023/04/Nandos-Spicy-Rice-photo-1-1200-%C3%97-1800px-1024x1536.jpg'),
    new Recipe('Rizoto', 'Opis testnog recepta', 'https://www.ambitiouskitchen.com/wp-content/uploads/2021/06/How-to-Make-Coconut-Rice-6.jpg'), 
    new Recipe('Pilav', 'Kineski recept', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8793452.jpg&q=60&c=sc&poi=auto&orient=true&h=512'),
    new Recipe('Karadjordjeva', 'Meso sa prilogom, bogat obrok', 'https://beatthebudget.com/wp-content/uploads/2023/04/Nandos-Spicy-Rice-photo-1-1200-%C3%97-1800px-1024x1536.jpg')
  ];
}
