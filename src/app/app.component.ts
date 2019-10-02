import { Component } from '@angular/core';
import {default as data} from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'features-angular_web';
  version = `V_${data.version}`;
}
