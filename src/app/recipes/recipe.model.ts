import {Ingredient} from "../shared/ingredient.model";
/**
 * Created by rajat.khare on 13/04/17.
 */


export class Recipe{
  public name;
  public description;
  public imagePath;
public ingredients: Ingredient[];
  constructor(name:string, desc:string, imagePath:string, ingredients: Ingredient[])
  {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
