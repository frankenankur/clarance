import { ComponentTreeComponent } from './component-tree.component';

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { TreeNode } from '../../assets/types/treeNode';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/v1/component-tree';


@Injectable({
  providedIn: 'root'
})
export class ComponentTreeService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNodes(): Observable<TreeNode[]> {
    return this.http.get<TreeNode[]>(apiUrl)
    .pipe(
      tap(_ => console.log('fetched components')),
      catchError(this.handleError('getComponents', []))
    );
  }
}
