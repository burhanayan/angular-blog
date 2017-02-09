// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
export class AppModule {}
