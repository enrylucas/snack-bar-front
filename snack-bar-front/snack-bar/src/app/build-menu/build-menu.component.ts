import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-build-menu',
  templateUrl: './build-menu.component.html'
})
export class BuildMenuComponent implements OnInit {

  constructor(private appService: AppService) { }

  public ingredients: Ingredient[] = [];
  public ingredientCounters: number[] = [];
  public error: number = -1;

  ngOnInit() {
    this.appService.getIngredients().subscribe(resp => {
      resp['content'].forEach(i => {
        this.ingredients.push(i);
        this.ingredientCounters.push(0);
      });
      this.error = 0;
      this.ingredients.sort((a , b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
      });
    }, error => {console.log("Error on getting Ingredients."); this.error = 1});
  }

  public incrementButton(i: number) {
    if (this.ingredientCounters[i] < 99) this.ingredientCounters[i] += 1;
  }

  public decrementButton(i: number) {
    if (this.ingredientCounters[i] > 0) this.ingredientCounters[i] -= 1;
  }

  public getPrice() {
    let hasAlface = false;
    let hasBacon = false;
    let meatCount = 0;
    let meatPrice = 0;
    let cheeseCount = 0;
    let cheesePrice = 0;
    let total = 0;
    this.ingredients.forEach((ing, i) => {
      if (ing.name == "Alface" && this.ingredientCounters[i] != 0) hasAlface = true;
      if (ing.name == "Bacon" && this.ingredientCounters[i] != 0) hasBacon = true;
      if (ing.is_cheese) {
        cheeseCount += this.ingredientCounters[i];
        cheesePrice = ing.price;
      }
      if (ing.is_meat) {
        meatCount += this.ingredientCounters[i];
        meatPrice = ing.price;
      }
      total += ing.price * this.ingredientCounters[i];
    })

    total -= (meatCount/3)*meatPrice;
    total -= (cheeseCount/3)*cheesePrice;
    if (hasAlface && !hasBacon) total *= 0.9;
    total.toPrecision(2);
    return total;
  }

}
