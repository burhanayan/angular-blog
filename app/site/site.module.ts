import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

// Root Containers
import { SiteComponent } from './site.component';
// Fixed Containers
import { TopbarComponent } from './containers/topbar/topbar.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
// Pages
import { HomeComponent } from './containers/pages/home/home.component';
import { ContactComponent } from './containers/pages/contact/contact.component';
import { AboutComponent } from './containers/pages/about/about.component';

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule, MaterialModule, ReactiveFormsModule, FormsModule],
    exports: [SiteComponent],
    declarations: [SiteComponent, TopbarComponent, SidebarComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent],
    providers: [],
})
export class SiteModule { }
