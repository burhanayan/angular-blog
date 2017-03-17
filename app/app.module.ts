// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Modules
import { SiteModule } from './site/site.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
// Components
import { AppComponent } from './app.component';
// Routes
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    DashboardModule,
    SiteModule,
    SharedModule,
    routing
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule { }
