import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;
  @ViewChild('f')
  slForm!: NgForm;
  // @ViewChild('nameInput', { static: false }) nameInputRef = ElementRef;
  // @ViewChild('nameInput', { static: false })
  // nameInputRef!: ElementRef;
  // @ViewChild('ammountInput')
  // ammountInputRef!: ElementRef;

  onAddItem(form: NgForm) {
    const value = form.value;

    // const ingName = this.nameInputRef.nativeElement.value;
    // const ammountName=this.ammountInputRef.nativeElement.value

    const newIngredint = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListServcie.updateIngredient(
        this.editedItemIndex,
        newIngredint
      );
    } else {
      this.shoppingListServcie.addIngrediant(newIngredint);
    }
    this.editMode = false;
    form.reset();
  }
  constructor(private shoppingListServcie: ShoppingListService) {}
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListServcie.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
  ngOnInit(): void {
    this.subscription = this.shoppingListServcie.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListServcie.getIngredientEdit(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
