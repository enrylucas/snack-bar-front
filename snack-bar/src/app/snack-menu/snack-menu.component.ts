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
  public prices: string[] = [];
  public error: number = -1;

  ngOnInit() {
    this.appService.getFoods().subscribe( resp => {
      this.foods = resp;
      this.error = 0;
      this.foods.forEach((f,i) => this.getPrice(f,i));
    }, error => {console.log("Error on getting foods."); this.error = 1;});

    this.appService.getIngredients().subscribe( resp => {
      this.ingredients = resp;
      this.error = 0;
    }, error => {console.log("Error on getting Ingredients."); this.error = 1;});

  }

  public getPrice(food: Food, i:number){
    let aux = food.ingredients.map(ing => ing.id);
    let auxQty = new Array(aux.length);
    for(let j=0;j<aux.length;j++) auxQty[j] = 1;
    this.appService.calculatePrice({ingredientsId: aux, ingredientsQty: auxQty}).subscribe(resp => {this.prices[i] = resp.toFixed(2)});
  }

}
