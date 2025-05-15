import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-connor',
  imports: [FieldsetModule, AvatarModule, CardModule],
  templateUrl: './connor.component.html',
  styleUrl: './connor.component.css'
})
export class ConnorComponent {

}
