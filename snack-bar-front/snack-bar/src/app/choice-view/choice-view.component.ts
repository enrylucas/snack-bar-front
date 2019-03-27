import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html'
})
export class ChoiceViewComponent implements OnInit {

  constructor(private appService: AppService) { }

  public ingredients: Ingredient[] = [];
  public error: boolean = false;

  ngOnInit() {
  }

}
