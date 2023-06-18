import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  loginForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
  });

  private destroyed$ = new Subject<boolean>();

  constructor(private authService: AuthService) {}

  login() {
    // TODO: add better error handling
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).pipe(takeUntil(this.destroyed$)).subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
