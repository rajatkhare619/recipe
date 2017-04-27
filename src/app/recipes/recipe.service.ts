/**
 * Created by rajat.khare on 17/04/17.
 */
import {Recipe} from "./recipe.model";
import { Injectable } from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

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

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }
}
