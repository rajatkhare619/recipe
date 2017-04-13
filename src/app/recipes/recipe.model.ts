/**
 * Created by rajat.khare on 13/04/17.
 */


export class Recipe{
  public name;
  public description;
  public imagePath;

  constructor(name:string, desc:string, imagePath:string)
  {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
