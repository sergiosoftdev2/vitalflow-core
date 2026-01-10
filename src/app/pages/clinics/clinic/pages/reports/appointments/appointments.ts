import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-reports-appointments',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div class="mt-6">
       <div class="bg-white dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700">
         <h3 class="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Estado de Citas</h3>
         <apx-chart
           [series]="chartOptions.series!"
           [chart]="chartOptions.chart!"
           [plotOptions]="chartOptions.plotOptions!"
           [labels]="chartOptions.labels!"
           [legend]="chartOptions.legend!"
           [colors]="chartOptions.colors!"
         ></apx-chart>
       </div>
    </div>
  `
})
export class ReportsAppointmentsComponent {
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 350,
        type: "radialBar",
        fontFamily: 'Inter, sans-serif'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6"],
      labels: ["Completadas", "Pendientes", "Canceladas", "Reprogramadas"],
      legend: {
        show: true,
        floating: true,
        fontSize: "14px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName: string, opts: any) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3
        }
      }
    };
  }
}
