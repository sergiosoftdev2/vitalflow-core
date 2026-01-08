import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Projects</h3>
        <div class="value">12</div>
        <div class="trend up">↑ 8% from last month</div>
      </div>
      <div class="stat-card">
        <h3>Active Tasks</h3>
        <div class="value">24</div>
        <div class="trend up">↑ 2 new today</div>
      </div>
      <div class="stat-card">
        <h3>Pending Reviews</h3>
        <div class="value">5</div>
        <div class="trend down">↓ 1 overdue</div>
      </div>
    </div>

    <div class="section">
      <h3 class="section-title">Recent Activity</h3>
      <div class="activity-list">
        <div class="activity-item" *ngFor="let i of [1,2,3]">
          <div class="activity-icon">📝</div>
          <div class="activity-details">
            <span class="activity-text">Updated project specifications</span>
            <span class="activity-time">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: #fff;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .stat-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .stat-card h3 {
      font-size: 0.875rem;
      color: #64748b;
      margin: 0 0 0.5rem 0;
      font-weight: 500;
    }

    .stat-card .value {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }

    .trend {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .trend.up { color: #10b981; }
    .trend.down { color: #ef4444; }

    .section {
      background: #fff;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .section-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    .activity-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .activity-item {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 1px solid #f1f5f9;
    }

    .activity-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .activity-icon {
      width: 36px;
      height: 36px;
      background: #f1f5f9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
    }

    .activity-details {
      display: flex;
      flex-direction: column;
    }

    .activity-text {
      color: #334155;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .activity-time {
      color: #94a3b8;
      font-size: 0.85rem;
    }
  `]
})
export class DashboardComponent {}
