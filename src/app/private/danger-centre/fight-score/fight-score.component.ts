import { Component, OnInit, ViewChild } from '@angular/core';
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
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-fight-score',
  templateUrl: './fight-score.component.html',
  styleUrls: ['./fight-score.component.scss']
})
export class FightScoreComponent implements OnInit {
  currentUser: any;
  fightScore: any = 0;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  constructor(private moduleService: ModuleService, private localService: LocalCacheService) {

  }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getModuleScore();

  }

  async getModuleScore() {
    await this.moduleService.getModuleScoreById(this.currentUser.id,'D_C').toPromise().then((res: any) => {
      if (res.success) {
        this.fightScore = res.data[0];
        this.chartOptions = {
          series: [
            {
              name: "Question",
              data: [this.fightScore.q_1, this.fightScore.q_2, this.fightScore.q_3, this.fightScore.q_4, this.fightScore.q_5, this.fightScore.q_6, this.fightScore.q_7, this.fightScore.q_8, this.fightScore.q_9, this.fightScore.q_10]
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



