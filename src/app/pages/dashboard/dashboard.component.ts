import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { PageContainerComponent } from "../../ui/container/container";
import { TitleComponent } from "../../ui/title/title";
import { SessionService } from '../../../core/services/session.service';
import { CardComponent } from '../../ui/card/card'; 
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet, faCalendarCheck, faArrowRight, faCalendarDay, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { 
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexGrid,
  ApexYAxis
} from 'ng-apexcharts';
import { AvatarComponent } from "../../ui/avatar/avatar";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid?: ApexGrid;
  yaxis?: ApexYAxis;
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    TitleComponent,
    CardComponent,
    RouterLink,
    FontAwesomeModule,
    NgApexchartsModule,
    AvatarComponent
],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  authService = inject(AuthService);
  sessionService = inject(SessionService);

  myProfile = this.sessionService.getUserValue();

  get greeting(): string {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 12) {
      return 'Buenos días';
    } else if (hour >= 12 && hour < 20) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  }

  title = `${this.greeting}, ${this.myProfile?.firstName || 'Usuario'}`;
  faWallet = faWallet;
  faCalendarCheck = faCalendarCheck;
  faArrowRight = faArrowRight;
  faCalendarDay = faCalendarDay;
  faChartLine = faChartLine;
  balance = 12450.85;

  citas = [
    {
      nombre: "Juan Pérez",
      fecha: "2026-01-10",
      hora: "10:00",
      imageSrc: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      nombre: "Manuel Hierro",
      fecha: "2026-01-10",
      hora: "10:00",
      imageSrc: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      nombre: "Ana García",
      fecha: "2026-01-10",
      hora: "10:00",
      imageSrc: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      nombre: "María López",
      fecha: "2026-01-10",
      hora: "10:00",
      imageSrc: "https://randomuser.me/api/portraits/women/4.jpg"
    },
  ]

    public chartOptions: ChartOptions = {
      series: [
        {
          name: "Ingresos",
          data: [3100, 4000, 2800, 5100, 4200, 10900, 10000, 12000, 15000, 18000, 20000, 22000]
        }
      ],
      chart: {
        type: "area",
        height: 240,
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        },
        sparkline: {
          enabled: false
        }
      },
      colors: ["#22c55e"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 2
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100]
        }
      },
      xaxis: {
        categories: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      grid: {
        show: false
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            colors: '#94a3b8',
            fontFamily: 'Inter, sans-serif'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };

}

