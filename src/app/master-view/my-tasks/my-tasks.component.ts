import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CALENDAR_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-my-tasks',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxBadgeComponent, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxAvatarComponent, FormsModule],
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent {
  public value: string = 'This is a sample description of a task. It should have the most important things that should be achieved.';
}
