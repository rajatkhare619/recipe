import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Test", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg"),
    new Recipe("Another Recipe", "Test", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg")

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }
}
