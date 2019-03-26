import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-snack-menu',
  templateUrl: './snack-menu.component.html'
})
export class SnackMenuComponent implements OnInit {

  constructor(private appService: AppService) { }

  public foods: Food[] = [];
  public ingredients: Ingredient[] = [];
  public error: number = -1;

  ngOnInit() {
    this.appService.getFoods().subscribe( resp => {
      resp['content'].forEach(f => {this.foods.push(f); this.error = 0;});
    }, error => {console.log("Error on getting foods."); this.error = 1;});

    this.appService.getIngredients().subscribe( resp => {
      resp['content'].forEach(i => {this.ingredients.push(i); this.error = 0;});
    }, error => {console.log("Error on getting Ingredients."); this.error = 1;});

  }

  public getPrice(food: Food){
    let sum = 0;
    food.ingredients.forEach(ing => {
      this.ingredients.forEach( i => {
        if(i.name == ing.name){
          sum += i.price;
        }
      })
    })
    return sum;
  }

}
