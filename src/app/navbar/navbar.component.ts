import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
      },
      {
          label: 'Services',
          icon: 'pi pi-search',
          route: '/services',
          items: [
              {
                label: 'Repair',
                icon: 'pi pi-bolt',
                route: '/services/repair'
              },
              {
                label: 'Recovery',
                icon: 'pi pi-pencil',
                route: 'services/recovery'
              },
              {
                label: 'Setup',
                icon: 'pi pi-pencil',
                route: 'services/setup'
              },
              {
                label: 'Small Business/Home Office',
                icon: 'pi pi-palette',
                items: [
                    {
                      label: 'Apollo',
                      icon: 'pi pi-palette'
                    },
                    {
                      label: 'Ultima',
                      icon: 'pi pi-palette'
                    }
                ]
              },
              {
                label: 'Our Team',
                icon: 'pi pi-pencil'
              },
          ]
      },
      {
        label: 'Portfolio/Testimonials',
        icon: 'pi pi-envelope'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      },
  ]
  }
}
