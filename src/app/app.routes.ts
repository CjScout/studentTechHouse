import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecoveryComponent } from './pages/services/recovery/recovery.component';
import { RepairComponent } from './pages/services/repair/repair.component';
import { SetupComponent } from './pages/services/setup/setup.component';
import { TeamComponent } from './pages/services/team/team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/repair', component: RepairComponent },
  { path: 'services/recovery', component: RecoveryComponent },
  { path: 'services/setup', component: SetupComponent },
  { path: 'team', component: TeamComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard for 404 fallback
];

