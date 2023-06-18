import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CreateUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnDestroy {
  signUpForm = new FormGroup({
    first_name: new FormControl('', Validators.compose([Validators.required])),
    last_name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    confirm_password: new FormControl('', Validators.compose([Validators.required]))
  });

  private destroyed$ = new Subject<boolean>();

  constructor(private authService: AuthService) {}

  signUp() {
    // TODO: implement error handling for invalid form
    if(this.signUpForm.invalid) {
      console.log('form invalid');
      return;
    }
    
    if(this.signUpForm.value.password !== this.signUpForm.value.confirm_password) {
      return;
    }

    const {confirm_password, ...signUpData} = this.signUpForm.value;
    this.authService.sigUp(signUpData as CreateUser).pipe(takeUntil(this.destroyed$)).subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
