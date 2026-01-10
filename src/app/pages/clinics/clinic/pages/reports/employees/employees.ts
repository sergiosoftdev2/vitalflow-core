import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartOptions } from "../revenue/revenue"; // Reusing type for now

@Component({
  selector: 'app-reports-employees',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div class="mt-6">
       <div class="bg-white dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700">
         <h3 class="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Rendimiento por Empleado</h3>
         <apx-chart
           [series]="chartOptions.series!"
           [chart]="chartOptions.chart!"
           [labels]="chartOptions.labels!"
           [responsive]="chartOptions.responsive!"
           [legend]="chartOptions.legend!"
           [colors]="chartOptions.colors!"
         ></apx-chart>
       </div>
    </div>
  `
})
export class ReportsEmployeesComponent {
  public chartOptions: Partial<any>; // Using any for simplicitly with different chart type

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        height: 350,
        fontFamily: 'Inter, sans-serif'
      },
      labels: ["Dr. García", "Dra. López", "Enf. Martínez", "Recep. Ruiz", "Dr. Sánchez"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: {
         labels: { colors: '#71717a' },
         position: 'bottom'
      },
      colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6']
    };
  }
}
