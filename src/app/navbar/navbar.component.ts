import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        }
      },
      {
        label: 'Techicians and Services',
        icon: 'pi pi-desktop',
        items: [
            {
              label: 'About Our Team',
              icon: 'pi pi-book',
              command: () => {
                this.router.navigate(['/technicians']);
              }
            },
            {
              label: 'Connor',
              icon: 'pi pi-bolt',
              command: () => {
                this.router.navigate(['/services/repair']);
              },
              items: [
                  {
                    label: 'Repair',
                    icon: 'pi pi-wave-pulse'
                  },
                  {
                    label: 'Recovery',
                    icon: 'pi pi-wave-pulse'
                  },
                  {
                    label: 'Setup',
                    icon: 'pi pi-cog'
                  },
                  {
                    label: 'Small Business/Home Office Networking',
                    icon: 'pi pi-building'
                  },
                  {
                    label: 'Legacy Systems',
                    icon: 'pi pi-clock'
                  }
              ]
            },
            {
              label: 'Wyatt',
              icon: 'pi pi-bolt',
              command: () => {
                this.router.navigate(['/services/recovery']);
              },
              items: [
                  {
                    label: 'Repair',
                    icon: 'pi pi-wave-pulse'
                  },
                  {
                    label: 'Setup',
                    icon: 'pi pi-cog'
                  },
                  {
                    label: 'Telecommunications',
                    icon: 'pi pi-arrow-right-arrow-left'
                  }
              ]
            }
        ]
    },
    {
      label: 'Portfolio/Testimonials',
      icon: 'pi pi-heart',
      command: () => {
        this.router.navigate(['/portfolio']);
      }
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      command: () => {
        this.router.navigate(['/contact']);
      }
    },
  ]
  }
}
