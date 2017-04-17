import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
/**
 * Created by rajat.khare on 17/04/17.
 */
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
/*for (let ingredient of ingredients) {  //Lot of events will be emitted unnecessarily so this approach isn't recommended
  this.addIngredient(ingredient);
}*/

this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
