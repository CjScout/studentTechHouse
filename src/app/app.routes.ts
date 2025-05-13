import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TechniciansComponent } from './pages/technicians/technicians.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConnorComponent } from './pages/technicians/connor/connor.component';
import { WyattComponent } from './pages/technicians/wyatt/wyatt.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technicians', component: TechniciansComponent },
  { path: 'technicians/connor', component: ConnorComponent },
  { path: 'technicians/wyatt', component: WyattComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard for 404 fallback
];

