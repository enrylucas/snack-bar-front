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
  public totalPrice: string = "0.00";

  ngOnInit() {
    this.appService.getIngredients().subscribe(resp => {
      resp.forEach(i => {
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
    let aux = this.ingredients.map(i => i.id);
    return this.appService.calculatePrice({ingredientsId: aux, ingredientsQty: this.ingredientCounters}).subscribe(resp => this.totalPrice = resp.toFixed(2));
  }

  public getPriceNoDiscount(){
    return this.ingredients.reduce((acc,ing, i) => acc + ing.price*this.ingredientCounters[i], 0).toFixed(2);
  }

}
