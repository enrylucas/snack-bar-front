import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceViewComponent } from './choice-view/choice-view.component';
import { SnackMenuComponent } from './snack-menu/snack-menu.component';
import { BuildMenuComponent } from './build-menu/build-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceViewComponent,
    SnackMenuComponent,
    BuildMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
