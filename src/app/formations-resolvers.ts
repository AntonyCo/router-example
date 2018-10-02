import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class FormationsResolvers implements Resolve<any> {
  constructor() {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return of([{
        title: 'Module Angular',
        decription: '',
        }, {
            title: 'Module JavaScript',
            decription: '',
        }, {
            title: 'Module TypeScript',
            decription: '',
    }]).pipe(
        delay(5000)
    )
  }
}