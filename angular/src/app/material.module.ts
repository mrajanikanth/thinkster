import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSliderModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSliderModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
