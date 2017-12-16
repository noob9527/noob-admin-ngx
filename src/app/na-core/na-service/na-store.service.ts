import { NA_CONFIG, NaConfig } from './na-config.provider';
import { STORAGE } from './na-storage.provider';
import { Inject, Injectable } from '@angular/core';

const TOKEN_KEY = 'Authorization';

@Injectable()
export class NaStoreService {

  constructor(
    @Inject(STORAGE) private storage: Storage,
    @Inject(NA_CONFIG) private naConfig: NaConfig,
  ) { }

  getToken(): string {
    return this.storage.getItem(this.naConfig.tokenKey);
  }

  setToken(token: string) {
    this.storage.setItem(this.naConfig.tokenKey, token);
  }

  removeToken() {
    this.storage.removeItem(this.naConfig.tokenKey);
  }
}
