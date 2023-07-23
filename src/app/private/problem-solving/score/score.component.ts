import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
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
  provlemSolving: any = 0;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  constructor(private moduleService: ModuleService, private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 15, nextCode: 'B_A'  });
  }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getModuleScore();

  }

  async getModuleScore() {
    await this.moduleService.getModuleScoreById(this.currentUser.id,'P_S').toPromise().then((res: any) => {
      if (res.success) {
        this.provlemSolving = res.data[0];
        this.chartOptions = {
          series: [
            {
              name: "Question",
              data: [this.provlemSolving.q_1, this.provlemSolving.q_2, this.provlemSolving.q_3, this.provlemSolving.q_4, this.provlemSolving.q_5, this.provlemSolving.q_6, this.provlemSolving.q_7, this.provlemSolving.q_8, this.provlemSolving.q_9, this.provlemSolving.q_10]
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

  initChart() {

  }

}




