import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHeadersService {
  helper: JwtHelperService;
  private ProjectName: string = environment.projectName;

  constructor(private _http: HttpClient, private router: Router) {
    this.helper = new JwtHelperService();
  }
  token:any = ""

  // createHeaders() {
  //   // if (this.helper.isTokenExpired(localStorage.getItem(this.ProjectName))) {
  //   //   this.router.navigate(["/sso/login"]);
  //   // }
  //   // let token = localStorage.getItem(this.ProjectName);

  //   if (this.token != null && this.token != undefined) {
  //     return new HttpHeaders().set("x-auth-token", `${this.token}`);
  //   }

  //   // this.router.navigate(["/sso/login"]);
  // }

  createHeaders(): HttpHeaders {
    if (this.token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
    }
    // Handle other cases or just return a default HttpHeaders object
    return new HttpHeaders();
  }

  get(url:any) {
    return this._http.get(url, {
      headers: this.createHeaders(),
      observe: "response"
    });
  }
  getWithoutHeaders(url:any) {
    return this._http.get(url, {
      headers: this.createHeaders(),
      observe: "response"
    });
  }
  getwityout(url:any) {
    return this._http.get(url, {
      observe: "response"
    });
  }

  post(url:any, data:any) {
    return this._http.post(url, data, {
      headers: this.createHeaders(),
      observe: "response"
    });
  }
  postwithout(url:any, data:any) {
    debugger;
    return this._http.post(url, data, {
      observe: "response"
    });
  }
  postWithProgress( url:any, data:any) {
    return this._http.post(url, data, {
      headers: this.createHeaders(),
      observe: "events",
      reportProgress: true
    });
  };

  put(url:any, data:any) {
    return this._http.put(url, data, {
      headers: this.createHeaders(),
      observe: "response"
    });
  }
  delete(url:any) {
    return this._http.delete(url, {
      headers: this.createHeaders(),
      observe: "response"
    });
  }
  deleteWithou(url:any) {
    return this._http.delete(url, {
      observe: "response"
    });
  }
}
