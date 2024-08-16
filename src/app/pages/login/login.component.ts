// Angular imports
import { Component } from '@angular/core';

// Project imports
import { BtnComponent } from '../../shared/components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
