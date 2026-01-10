import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-reports-clients',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div class="mt-6">
       <div class="bg-white dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700">
         <h3 class="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Nuevos Clientes vs Recurrentes</h3>
         <apx-chart
           [series]="chartOptions.series!"
           [chart]="chartOptions.chart!"
           [xaxis]="chartOptions.xaxis!"
           [stroke]="chartOptions.stroke!"
           [tooltip]="chartOptions.tooltip!"
           [dataLabels]="chartOptions.dataLabels!"
           [legend]="chartOptions.legend!"
           [colors]="chartOptions.colors!"
         ></apx-chart>
       </div>
    </div>
  `
})
export class ReportsClientsComponent {
  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Nuevos Clientes",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Clientes Recurrentes",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        labels: { style: { colors: '#71717a' } }
      },
       yaxis: {
        labels: { style: { colors: '#71717a' } }
      },
      tooltip: {
        theme: 'dark'
      },
      legend: {
         labels: { colors: '#71717a' }
      },
      colors: ['#22c55e', '#3b82f6']
    };
  }
}
