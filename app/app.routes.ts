import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { SiteComponent } from './site/site.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Components
import { LoginComponent } from './shared/components/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

// Services
// import { AuthGuard } from './dashboard/services/auth-guard.service';

// Route Configuration
export const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: SiteComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent
        // , children: [
        //     { path: 'products', component: ProductDatatableComponent, canActivate: [AuthGuard] }
        // ]
    },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);