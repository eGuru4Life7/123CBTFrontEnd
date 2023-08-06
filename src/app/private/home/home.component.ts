import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { DatePipe } from '@angular/common';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TranslateService, DatePipe]
})
export class HomeComponent implements OnInit {
  moduleScore: any = 0;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  currentUser: any = {};
  modules: any = [];
  modulesStatus: any = {};
  moduleStatus1: any = {};
  moduleStatus2: any = {};
  moduleStatus3: any = {};
  moduleStatus4: any = {};
  moduleStatus5: any = {};
  moduleStatus6: any = {};
  moduleStatus7: any = {};
  moduleStatus8: any = {};
  moduleStatus9: any = {};
  isShow: any = false;
  currentDate: any;
  constructor(private localService: LocalCacheService, private moduleService: ModuleService, private translate: TranslateService, private datePipe: DatePipe) {

  }
  module1: any = {};
  module2: any = {};
  module3: any = {};
  module4: any = {};
  module5: any = {};
  module6: any = {};
  module7: any = {};
  module8: any = {};
  module9: any = {};

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.currentDate = this.datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
    this.getAllModule();
    this.getAllModuleStatusById();
    this.getModuleScore();
    this.chartOptions = {
      series: [
        {
          name: "Score",
          data: [0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "category",
        categories: [
          this.currentDate
          , this.currentDate
          , this.currentDate
          , this.currentDate
          , this.currentDate
          , this.currentDate
          , this.currentDate]
      }

    };
  }

  getAllModule() {
    this.moduleService.getAllModule().subscribe((res: any) => {
      if (res) {
        this.modules = res.data;
        this.module1 = this.modules.filter((s: any) => s.code == 'S')[0].status;
        this.module2 = this.modules.filter((s: any) => s.code == 'D_C')[0].status;
        this.module3 = this.modules.filter((s: any) => s.code == 'E_T')[0].status;
        this.module4 = this.modules.filter((s: any) => s.code == 'C_T')[0].status;
        this.module5 = this.modules.filter((s: any) => s.code == 'B_T')[0].status;
        this.module6 = this.modules.filter((s: any) => s.code == 'P_S')[0].status;
        this.module7 = this.modules.filter((s: any) => s.code == 'B_A')[0].status;
        this.module8 = this.modules.filter((s: any) => s.code == 'R')[0].status;
        this.module9 = this.modules.filter((s: any) => s.code == 'S_W')[0].status;
      }
    });

  }

  getAllModuleStatusById() {
    this.moduleService.getAllModuleStatusById(this.currentUser.id).subscribe((res: any) => {
      if (res) {
        this.modulesStatus = res.data;
        this.moduleStatus1 = this.modulesStatus.filter((s: any) => s.name == 'S')[0];

        this.moduleStatus2 = this.modulesStatus.filter((s: any) => s.name == 'D_C')[0]; //;
        //this.moduleStatus2.status = (new Date(this.currentUser.first_mod) <= new Date(Date.now()) && this.moduleStatus2.status ? true:false); 
        this.moduleStatus3 = this.modulesStatus.filter((s: any) => s.name == 'E_T')[0]; //&& (this.currentUser.second_mod <= new Date(Date.now()) ? true:false);
        //this.moduleStatus3.status = (new Date(this.currentUser.second_mod) <= new Date(Date.now()) && this.moduleStatus3.status ? true:false); 
        this.moduleStatus4 = this.modulesStatus.filter((s: any) => s.name == 'C_T')[0]; //&& (this.currentUser.third_mod <= new Date(Date.now()) ? true:false);
        //this.moduleStatus4.status = (new Date(this.currentUser.third_mod) <= new Date(Date.now()) && this.moduleStatus4.status ? true:false); 
        this.moduleStatus5 = this.modulesStatus.filter((s: any) => s.name == 'B_T')[0]; //&& (this.currentUser.fourth_mod <= new Date(Date.now()) ? true:false);
        //this.moduleStatus5.status = (new Date(this.currentUser.fourth_mod) <= new Date(Date.now()) && this.moduleStatus5.status ? true:false); 
        this.moduleStatus6 = this.modulesStatus.filter((s: any) => s.name == 'P_S')[0]; //&& (this.currentUser.fifth_mod <= new Date(Date.now()) ? true:false);
        //this.moduleStatus6.status = (new Date(this.currentUser.fifth_mod) <= new Date(Date.now()) && this.moduleStatus6.status ? true:false); 
        this.moduleStatus7 = this.modulesStatus.filter((s: any) => s.name == 'B_A')[0]; //&& (this.currentUser.sixth_mod <= new Date(Date.now()) ? true:false);
        //this.moduleStatus7.status = (new Date(this.currentUser.sixth_mod) <= new Date(Date.now()) && this.moduleStatus7.status ? true:false); 
        this.moduleStatus8 = this.modulesStatus.filter((s: any) => s.name == 'R')[0];
        this.moduleStatus9 = this.modulesStatus.filter((s: any) => s.name == 'S_W')[0];
      }
    });
  }


  openModal(moduleStatus: any) {
    if (moduleStatus == 0) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  setShowValue(event: boolean) {
    this.isShow = event;
  }
  getModuleScore() {
    let currentDate = this.datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
    this.moduleService.getAllModuleById(this.currentUser.id).subscribe((res: any) => {
      if (res.success) {
        let user = res.data.user;
        let score1 = res.data.stress ? res.data.stress.score : 0;
        let score2 = res.data.examineThought ? res.data.examineThought.score : 0;
        let score3 = res.data.thoughts ? res.data.thoughts.score : 0;
        let score4 = res.data.balance ? res.data.balance.score : 0;
        let score5 = res.data.problemSolving ? res.data.problemSolving.score : 0;
        let score6 = res.data.blanceActivities ? res.data.blanceActivities.score : 0;
        let date1 = res.data.stress ? res.data.stress.date : user.first_mod;
        let date2 = res.data.examineThought ? res.data.examineThought.date : user.second_mod;
        let date3 = res.data.thoughts ? res.data.thoughts.date : user.third_mod;
        let date4 = res.data.balance ? res.data.balance.date : user.fourth_mod;
        let date5 = res.data.problemSolving ? res.data.problemSolving.date : user.fifth_mod;
        let date6 = res.data.blanceActivities ? res.data.blanceActivities.date : user.sixth_mod;
        console.log(score1);
        console.log(score2);
        console.log(score3);
        console.log(score4);
        console.log(score5);
        console.log(score6);
       this.chartOptions = {
            series: [
              {
                name: "Score",
                data:[score1,
                  score2,
                  score3,
                  score4,
                  score5,
                  score6,
                  0]
              }
            ],
            chart: {
              height: 350,
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "smooth"
            },
            xaxis: {
              type: "category",
              categories: [
                date1
                , date2
                , date3
                , date4
                , date5
                , date6
                , currentDate]
            }

          };
        // } else {

        // }
      }
    });
  }
}
