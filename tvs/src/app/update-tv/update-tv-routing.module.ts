import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTvPage } from './update-tv.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTvPageRoutingModule {}
