/**
 * Created by rajat.khare on 17/04/17.
 */
import {Recipe} from "./recipe.model";
import { Injectable } from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe("A Test Recipe",
      "Chicken Kathi roll",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg",
      [new Ingredient("Tomatoes", 3),
        new Ingredient("Potatoes", 4)]),
    new Recipe("Another Recipe",
      "Kachori",
      "http://www.manjulaskitchen.com/blog/wp-content/uploads/urad_dal_kachori.jpg",
      [new Ingredient("Chili", 3),
        new Ingredient("oil", 4)])

  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
