import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public person = null;

  constructor(private _http: HttpClient) {

  }

  private _getPerson(): Observable<any> {
    return this._http.get('https://swapi.co/api/people/1/');
  }

  private _getHomeland(url: string): Observable<any> {
    return this._http.get(url);
  }

  public getPerson() {
    this._getPerson().subscribe((person: any) => {
      this.person = person.name;
    });
  }
}
