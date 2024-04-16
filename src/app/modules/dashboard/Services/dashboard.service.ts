import { Injectable } from '@angular/core';
import { AppHeadersService } from 'src/app/shared/services/app-headers.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public domain:any = environment.domain

  constructor(private appHeaders: AppHeadersService) { }

  private urls = {
    Test:"https://http.cat/status/101.txt",
    getData: this.domain + '/posts',
    profile: this.domain + '/profile'
  }
  // getDemoData() {
  //   return this.appHeaders.getWithoutHeaders(this.urls.Test);
  // }


  getDemoData() {
    return this.appHeaders.get(this.urls.getData);
  }

  getDemoProfile() {
    return this.appHeaders.get(this.urls.profile);
  }

  postData(user:any){
    return this.appHeaders.post(this.urls.getData, user)
  }

  deleteData(id:any){
    return this.appHeaders.delete(this.urls.getData + '/' + id )
  }

}
