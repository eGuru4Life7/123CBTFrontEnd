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
import { Router } from '@angular/router';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  currentUser: any;
  moduleScore: any = 0;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>
  constructor(private moduleService: ModuleService, private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus( { code: 'B_A', completed: 30, nextCode: 'R' });
   }
  
  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getModuleScore();
  
  }
  
  async getModuleScore() {
    await this.moduleService.getModuleScoreById(this.currentUser.id,'B_A').toPromise().then((res: any) => {
      if (res.success) {
        this.moduleScore = res.data[0];
        this.chartOptions = {
          series: [
            {
              name: "Question",
              data: [this.moduleScore.q_1, this.moduleScore.q_2, this.moduleScore.q_3, this.moduleScore.q_4, this.moduleScore.q_5, this.moduleScore.q_6, this.moduleScore.q_7, this.moduleScore.q_8, this.moduleScore.q_9, this.moduleScore.q_10]
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
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          }
  
        };
      }
    })
  }
  }
  
  
