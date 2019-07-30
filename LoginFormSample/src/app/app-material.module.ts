import { NgModule } from '@angular/core';
import { MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
