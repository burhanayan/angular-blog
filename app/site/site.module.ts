import { NgModule } from '@angular/core';

// Root Containers
import { SiteComponent } from './site.component';
// Child Containers
import { TopbarComponent } from './containers/topbar/topbar.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';


@NgModule({
    imports: [],
    exports: [SiteComponent],
    declarations: [SiteComponent, TopbarComponent, SidebarComponent, FooterComponent],
    providers: [],
})
export class SiteModule { }
