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
        icon: 'pi pi-search',
        items: [
            {
              label: 'About Our Team',
              icon: 'pi pi-pencil',
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
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Recovery',
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Setup',
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Small Business/Home Office Networking',
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Legacy Systems',
                    icon: 'pi pi-palette'
                  }
              ]
            },
            {
              label: 'Wyatt',
              icon: 'pi pi-pencil',
              command: () => {
                this.router.navigate(['/services/recovery']);
              },
              items: [
                  {
                    label: 'Repair',
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Setup',
                    icon: 'pi pi-palette'
                  },
                  {
                    label: 'Telecommunications',
                    icon: 'pi pi-palette'
                  }
              ]
            }
        ]
    },
    {
      label: 'Portfolio/Testimonials',
      icon: 'pi pi-envelope',
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
