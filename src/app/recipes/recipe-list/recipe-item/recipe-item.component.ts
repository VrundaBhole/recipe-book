import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes/recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input()
  recipe!: Recipe;
  @Input()
  index!: number;
  // @Output() recipeSelected=new EventEmitter<Recipe>();
  constructor(private recipeServcie:RecipeService)
{

}  


onSelect(){
    console.log('recipe item clicked');
      this.recipeServcie.recipeSelected.emit(this.recipe);


    
    // this.recipeSelected.emit(this.recipe);

  }
}
