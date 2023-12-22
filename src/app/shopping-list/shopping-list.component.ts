import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient('apples', 5),
  //   new Ingredient('apples', 50),
  //   new Ingredient('apples', 15),
  // ];
  ingredients!: Ingredient[];
  constructor(private shopinglistservcie: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shopinglistservcie.getIngredient();
    this.shopinglistservcie.ingrediantChanged.subscribe(
      (ingredinat: Ingredient[]) => {
        this.ingredients = ingredinat;
      }
    );
  }
  onEditItem(index:number){
    this.shopinglistservcie.startedEditing.next(index);

  }

  // IngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
