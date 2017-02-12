import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

// Containers
import { TopbarComponent } from './containers/topbar/topbar.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';

// Components
// Services
// Models

@NgModule({
    imports: [],
    exports: [DashboardComponent],
    declarations: [DashboardComponent, SidebarComponent, TopbarComponent],
    providers: [],
})
export class DashboardModule { }