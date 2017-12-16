import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { NaCredentials } from '../../na-core/na-service/na-authentication/na-authentication.domain';
import { NaAuthenticationService } from '../../na-core/na-service/na-authentication/na-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  appName = environment.appName;
  form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: NaAuthenticationService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }

  ngOnInit() {
  }

  onSubmit(credentials: NaCredentials) {
    this.authenticationService.login(credentials)
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
