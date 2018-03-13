import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class BookTrackerErrorHandlerService implements ErrorHandler {

  handleError(error: any): void {
    console.log(error);
  }
  constructor() { }
}
