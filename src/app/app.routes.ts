// Angular imports
import { Routes } from '@angular/router';

// Project imports
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
];
