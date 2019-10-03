import { Component } from '@angular/core';
import { default as data } from '../../package.json';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.title;
  version = `V_${data.version}`;
}
