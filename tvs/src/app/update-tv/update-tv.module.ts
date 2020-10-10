import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTvPageRoutingModule } from './update-tv-routing.module';

import { UpdateTvPage } from './update-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateTvPageRoutingModule
  ],
  declarations: [UpdateTvPage]
})
export class UpdateTvPageModule {}
