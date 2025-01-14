import { Component } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/modules/dashboard/dashboard.module';
DashboardComponent
DashboardModule
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pf';
}
