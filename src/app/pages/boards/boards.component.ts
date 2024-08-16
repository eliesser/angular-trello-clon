// Angular imports
import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';

// Third party imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

// Project imports
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NgFor, NavbarComponent, FontAwesomeModule, CdkAccordionModule],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 3.3',
        },
      ],
    },
  ];
}
