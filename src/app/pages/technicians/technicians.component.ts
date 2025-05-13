import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technicians',
  imports: [CommonModule, TabsModule, BadgeModule, AvatarModule, ButtonModule, RouterLink],
  templateUrl: './technicians.component.html',
  styleUrl: './technicians.component.css'
})
export class TechniciansComponent {

}
