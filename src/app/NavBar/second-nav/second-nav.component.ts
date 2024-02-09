import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.scss'],
  standalone:true,
  imports:[HttpClientModule,RouterModule],
 
})
export class SecondNavComponent {

}
