import { NA_CONFIG, NaConfig } from '../na-config';
import { STORAGE } from './na-storage.provider';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class NaStoreService {

  constructor(
    @Inject(STORAGE) private storage: Storage,
    @Inject(NA_CONFIG) private naConfig: NaConfig,
  ) { }

  getToken(): Maybe<string> {
    return this.storage.getItem(this.naConfig.tokenKey);
  }

  setToken(token: string) {
    this.storage.setItem(this.naConfig.tokenKey, token);
  }

  removeToken() {
    this.storage.removeItem(this.naConfig.tokenKey);
  }
}
