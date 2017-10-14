/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NaAclService } from './na-acl.service';

describe('Service: NaAcl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaAclService]
    });
  });

  it('should ...', inject([NaAclService], (service: NaAclService) => {
    expect(service).toBeTruthy();
  }));
});