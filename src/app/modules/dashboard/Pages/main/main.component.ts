import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const DATA_KEY = makeStateKey('data');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public serverData: any;

  public dataList: any
  public dataListProfile: any

  public platformId: object = {}


  constructor(private dashboardServies: DashboardService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) platformId: object) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (this.transferState.hasKey(makeStateKey('demoData'))) {
      this.dataList = this.transferState.get(makeStateKey('demoData'), [])
      // console.log("Data Arrived in Server Side", this.dataList)
    }
    else {
      this.dataServerData();
      // console.log("Data Arrived in Client Side")

    }

    if (this.transferState.hasKey(makeStateKey('demoDataProfile'))) {
      this.dataListProfile = this.transferState.get(makeStateKey('demoDataProfile'), [])
      console.log("Data Arrived in Server Side", this.dataListProfile)
    }
    else {
      this.dataServerDataProfile();
      // console.log("Data Arrived in Client Side")

    }

  }


  dataServerData() {
    this.dashboardServies.getDemoData().subscribe((res) => {
      if (isPlatformServer(this.platformId)) {
        this.transferState.set<any>(makeStateKey('demoData'), res['body'])
      }
      // this.dataList = res['body']
    })
  }

  dataServerDataProfile() {
    this.dashboardServies.getDemoProfile().subscribe((res) => {
      if (isPlatformServer(this.platformId)) {
        this.transferState.set<any>(makeStateKey('demoDataProfile'), res['body'])
      }
      // this.dataList = res['body']
    })
  }

  postToServer() {


    let data: any;
    data = { "id":9 , "title": "json-server-dev", "author": "typicode" }
    this.serverData = this.transferState.get(DATA_KEY, null);

    if (!this.serverData) {

      this.dashboardServies.postData(data).subscribe((res) => {
        console.log("it WorksS");
        this.serverData = res;
        this.transferState.set<any>(DATA_KEY, res);
        console.log("DataPosted", this.serverData);

      },
        (error) => {
          console.error('Error:', error);
        }
      )

    }
  }

  deleteIt(){
    this.dashboardServies.deleteData(1).subscribe((res) => {
      console.log("Deleted");
      
    })
  }

}
