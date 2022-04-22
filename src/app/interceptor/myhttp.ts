import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Myhttp implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authReq: HttpRequest<any> = req.clone({
      headers: req.headers.set('Authorization','Bearer ' +'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MDYxMTYzOCwiZXhwIjoxNjUwNjk4MDM4fQ.mNUR55pquZgnskGq-5Cv7jp-9ETDFF8JkKSAe7w3l6Y2OLwVwypyjtsXfttP9kGzYM9dq5auUB4esHdn28YJOg').set('X-TENANT-ID', 'fe_0122a')
    });
    return next.handle(authReq);
  }
}
