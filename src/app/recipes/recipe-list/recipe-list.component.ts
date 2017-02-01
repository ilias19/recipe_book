import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('dummy','dummy','http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg',[]),
    new Recipe('dummy1','dummy1','http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg',[]),
    new Recipe('dummy2','dummy2','http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg',[]),
  ];
  @Output()recipeSelected = new EventEmitter();
  //recipe = new Recipe('dummy','dummy','http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
