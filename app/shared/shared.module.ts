import { NgModule } from '@angular/core';

// Components
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
    imports: [],
    exports: [LoginComponent, NotFoundComponent],
    declarations: [LoginComponent, NotFoundComponent],
    providers: [AuthGuardService],
})
export class SharedModule { }
