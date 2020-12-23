import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Players} from './players.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Players>{
    return this.http.get<Players>(this.apiUrl + '/player');
  }

  createPlayer(player): Observable<Players> {
    return this.http.post<Players>(this.apiUrl + '/player', JSON.stringify(player), this.httpOptions);
  }

  getPlayer(id): Observable<Players> {
    return this.http.get<Players>(this.apiUrl + '/player/' + id);
  }

  updatePlayer(id, player): Observable<Players>{
    return this.http.put<Players>(this.apiUrl + '/player/' + id,
      JSON.stringify(player), this.httpOptions);
  }

  deletePlayer(id){
    return this.http.delete<Players>(this.apiUrl + '/player/' + id);
  }

}
