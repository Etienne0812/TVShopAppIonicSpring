import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTvPage } from './add-tv.page';

const routes: Routes = [
  {
    path: '',
    component: AddTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTvPageRoutingModule {}
