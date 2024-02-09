import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.scss'],
  standalone:true,
  imports:[HttpClientModule]
})
export class FirstNavComponent {

}
