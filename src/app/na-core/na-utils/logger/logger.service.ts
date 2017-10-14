import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  debug = console.debug.bind(console);
  log = console.log.bind(console);
  info = console.info.bind(console);
  warn = console.warn.bind(console);
  error = console.error.bind(console);
}
