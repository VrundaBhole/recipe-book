import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  id: number | undefined;
  @Input()
  recipe!: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeServcie: RecipeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    //  const id=this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeServcie.getRecipe(this.id);
    });
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
