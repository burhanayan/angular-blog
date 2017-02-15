import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Root Containers
import { SiteComponent } from './site.component';
// Child Containers
import { TopbarComponent } from './containers/topbar/topbar.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';


@NgModule({
    imports: [BrowserModule],
    exports: [SiteComponent],
    declarations: [SiteComponent, TopbarComponent, SidebarComponent, FooterComponent],
    providers: [],
})
export class SiteModule { }
