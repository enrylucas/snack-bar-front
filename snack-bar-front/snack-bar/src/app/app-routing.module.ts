import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceViewComponent } from './choice-view/choice-view.component';
import { SnackMenuComponent } from './snack-menu/snack-menu.component';
import { BuildMenuComponent } from './build-menu/build-menu.component';

const routes: Routes = [
  {path: '', redirectTo: '/choiceView', pathMatch: 'full'},
  {path: 'choiceView', component: ChoiceViewComponent },
  {path: 'snackMenu', component: SnackMenuComponent },
  {path: 'buildMenu', component: BuildMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
