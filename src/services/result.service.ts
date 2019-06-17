import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  public results = [
    [ ],
    [ ],
    [ ],

  ];

  public resultsUser: Array<number> = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

  public userStatus = false;

}


