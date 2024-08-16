// Angular imports
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

// Third party imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

// Project imports
import { BtnComponent } from '..';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;

  isOpen = false;
  isOpenBody = false;
}
