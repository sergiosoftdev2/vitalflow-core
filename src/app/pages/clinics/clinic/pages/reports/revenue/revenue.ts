import { Component, input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-reports-invoicing',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './revenue.html' 
})
export class ReportsRevenueComponent {
  public weeklyChartOptions!: Partial<ChartOptions>;
  public monthlyChartOptions!: Partial<ChartOptions>;
  public annualChartOptions!: Partial<ChartOptions>;

  constructor() {
    this.initWeeklyChart();
    this.initMonthlyChart();
    this.initAnnualChart();
  }

  private initWeeklyChart() {
    this.weeklyChartOptions = {
      series: [
        { name: "Ingresos", data: [1200, 1500, 1300, 1800, 2100, 900, 800] },
        { name: "Gastos", data: [800, 900, 700, 1100, 1200, 500, 400] },
      ],
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "40%", borderRadius: 4 }
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: {
        categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        labels: { style: { colors: '#71717a' } }
      },
      yaxis: {
        labels: { style: { colors: '#71717a' } }
      },
      fill: { opacity: 1, colors: ['#22c55e', '#ef4444'] },
      tooltip: { theme: 'dark' },
      legend: { labels: { colors: '#71717a' } }
    };
  }

  private initMonthlyChart() {
    this.monthlyChartOptions = {
      series: [
        { name: "Ingresos", data: [5200, 4800, 6100, 5900] },
      ],
      chart: {
        type: "area",
        height: 300,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3, colors: ['#3b82f6'] },
      xaxis: {
        categories: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        labels: { style: { colors: '#71717a' } }
      },
      yaxis: {
        labels: { style: { colors: '#71717a' } }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        },
        colors: ['#3b82f6']
      },
      tooltip: { theme: 'dark' },
      legend: { labels: { colors: '#71717a' } }
    };
  }

  private initAnnualChart() {
    this.annualChartOptions = {
      series: [
        { name: "Ingresos", data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80] },
        { name: "Gastos", data: [30, 35, 40, 45, 40, 42, 48, 50, 52, 55, 60, 65] },
        { name: "Beneficio", data: [14, 20, 17, 11, 21, 16, 15, 10, 14, 15, 15, 15] }
      ],
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        labels: { style: { colors: '#71717a' } }
      },
      yaxis: {
        labels: { style: { colors: '#71717a' } }
      },
      fill: { opacity: 0.5, colors: ['#22c55e', '#ef4444', '#3b82f6'] },
      tooltip: { theme: 'dark' },
      legend: { labels: { colors: '#71717a' } },
      colors: ['#22c55e', '#ef4444', '#3b82f6']
    };
  }
}
