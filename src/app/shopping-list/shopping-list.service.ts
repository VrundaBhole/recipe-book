import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingrediantChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('apples', 50),
    new Ingredient('apples', 15),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }
  getIngredientEdit(index: number) {
    return this.ingredients[index];
  }
  addIngrediant(ingredient: Ingredient) {
    // this.ingredients.push(ingredient)
    // this.ingrediantChanged.emit(this.ingredients.slice());
    this.ingredients.push(ingredient);
    this.ingrediantChanged.emit(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingrediantChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrediantChanged.next(this.ingredients.slice());
  }
}
