import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginSample';
  formModel: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.formModel = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formModel.invalid) {
      const config = new MatSnackBarConfig();
      config.panelClass = ['snackbar-background'];
      config.duration = 2000;
      this.snackBar.open('Invalid username or password.', '', config);
    }
  }
}
