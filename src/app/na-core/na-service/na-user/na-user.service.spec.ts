/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaUserService } from './na-user.service';

describe('Service: NaUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaUserService]
    });
  });

  it('should ...', inject([NaUserService], (service: NaUserService) => {
    expect(service).toBeTruthy();
  }));
});