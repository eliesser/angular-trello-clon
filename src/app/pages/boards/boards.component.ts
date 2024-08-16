// Angular imports
import { Component } from '@angular/core';

// Project imports
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {}
