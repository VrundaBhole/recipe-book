import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe.modal";

//servcies are basiclly a class only
export class RecipeService {
    recipeSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a test book',
      'https://media.istockphoto.com/id/1065775208/photo/burger-s.jpg?s=612x612&w=0&k=20&c=vbVE-qFm9TQgSIWBIeFbQaDHiwuqxsnJOq2-r7-dkOo='
    ),
    new Recipe(
      'Second Recipe',
      'second recipe description',
      'https://media.istockphoto.com/id/1368174778/photo/pizza-with-pear-and-cheese.jpg?s=612x612&w=0&k=20&c=TNUZ6T-HJglq-Zfzwzvetr8AZ8d4qQ3QfrpM7ADjXx8='
    ),
  ];
  getRecipeMethod(){
    return this.recipes.slice();
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

}