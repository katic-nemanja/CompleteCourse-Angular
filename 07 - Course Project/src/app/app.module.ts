import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from '../Recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from '../Recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from '../Recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from '../ShoppingList/shopping-list.component';
import { ShoppingListEditComponent } from '../ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from '../Recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    RecipeListComponent, 
    RecipeDetailsComponent, 
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
