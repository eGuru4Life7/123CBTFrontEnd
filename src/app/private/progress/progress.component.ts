import { Component, OnInit, ViewChild } from '@angular/core';
import { async } from 'rxjs';
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
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  providers:[DatePipe]
})
export class ProgressComponent {
  currentUser: any;
  moduleScore: any = 0;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  constructor(private moduleService: ModuleService, private localService: LocalCacheService,private datePipe:DatePipe) {

  }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getModuleScore();

  }

  async getModuleScore() {
    let currentDate = this.datePipe.transform(new Date(Date.now()),'yyyy-MM-dd');
    await this.moduleService.getAllModuleById(this.currentUser.id).toPromise().then((res: any) => {
      if (res.success) {
        console.log(res);
     
        let user = res.data.user;
        let score1 = res.data.stress?res.data.stress.score:0;
        let score2 = res.data.examineThought? res.data.examineThought.score:0;
        let score3 = res.data.thoughts?res.data.thoughts.score:0;
        let score4 = res.data.balance? res.data.balance.score:0;
        let score5 = res.data.problemSolving?res.data.problemSolving.score:0;
        let score6 = res.data.blanceActivities?res.data.blanceActivities.score:0;
        let date1 = res.data.stress?res.data.stress.date:user.first_mod;
        let date2 = res.data.examineThought? res.data.examineThought.date:user.second_mod;
        let date3 = res.data.thoughts?res.data.thoughts.date:user.third_mod;
        let date4 = res.data.balance? res.data.balance.date:user.fourth_mod;
        let date5 = res.data.problemSolving?res.data.problemSolving.date:user.fifth_mod;
        let date6 = res.data.blanceActivities?res.data.blanceActivities.date:user.sixth_mod;
        this.chartOptions = {
          series: [
            {
              name: "Score",
              data: [score1,
                     score2,
                     score3,
                     score4,
                     score5,
                     score6,
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
               date1
              ,date2
              ,date3
              ,date4
              ,date5
              ,date6
              ,currentDate]
          }
  
        };
      }else{
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
              currentDate
              ,currentDate
              ,currentDate
              ,currentDate
              ,currentDate
              ,currentDate
              ,currentDate]
          }
  
        };
      }
    })
  }

}

