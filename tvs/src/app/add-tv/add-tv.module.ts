import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTvPageRoutingModule } from './add-tv-routing.module';

import { AddTvPage } from './add-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    AddTvPageRoutingModule
  ],
  declarations: [AddTvPage]
})
export class AddTvPageModule {}
