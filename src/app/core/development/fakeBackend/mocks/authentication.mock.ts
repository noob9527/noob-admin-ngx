import { Injectable } from '@angular/core';
import { BaseMockService } from '../baseMock.service';

export class AuthenticationMock extends BaseMockService {
  protected Mock: any;

  register(): void {
    super.register();
    this.Mock.mock('/api/v1/authenticate', 'post', {
      token: 'fake token',
    });
  }
}
