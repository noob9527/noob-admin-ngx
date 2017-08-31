import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, Credential } from '../../core/naCore/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      username: [null],
      password: [null],
    });
  }

  ngOnInit() {
  }

  onSubmit(credential: Credential) {
    console.log(credential);
    this.authenticationService.login(credential)
      .subscribe(res => {
        if (res) this.router.navigate(['/']);
      });
  }

}
