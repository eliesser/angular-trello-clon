// Angular imports
import { Routes } from '@angular/router';

// Project imports
import {
  LoginComponent,
  BoardsComponent,
  BoardComponent,
  ScrollComponent,
} from './pages';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'scroll',
    component: ScrollComponent,
  },
];
