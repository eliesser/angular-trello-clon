// Angular imports
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

// Project imports
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
}
