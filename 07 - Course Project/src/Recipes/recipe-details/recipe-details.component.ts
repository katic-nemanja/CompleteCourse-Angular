import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-details',
    templateUrl: 'recipe-details.component.html',
    styleUrl: 'recipe-details.component.css'
})

export class RecipeDetailsComponent {
    @Input({ required: true }) inRecept: Recipe = { name: '', description: '', imagePath: '' };


    kliknuto(element: any) {
        console.log(element.firstChild.text);
    }
}