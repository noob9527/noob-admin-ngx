import { environment } from '../../../environments/environment';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, Credential } from '../../core/na-core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appName = environment.appName;
  form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }

  ngOnInit() {
  }

  onSubmit(credential: Credential) {
    this.authenticationService.login(credential)
      .subscribe(res => {
        if (res) this.router.navigate(['/']);
      });
  }

  get username() {
    return this.form.controls.username;
  }

  get password() {
    return this.form.controls.password;
  }
}
