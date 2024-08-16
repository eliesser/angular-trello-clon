// Angular imports
import { Component, inject } from '@angular/core';
import { DialogModule, DialogRef } from '@angular/cdk/dialog';

// Third party imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

// Project imports
import { BtnComponent } from '..';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [DialogModule, BtnComponent, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  private dialogRef = inject(DialogRef);

  close() {
    this.dialogRef.close();
  }
}
