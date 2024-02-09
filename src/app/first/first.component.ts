import { Component } from '@angular/core';
import { FirstNavComponent } from '../NavBar/first-nav/first-nav.component';
import { SecondNavComponent } from '../NavBar/second-nav/second-nav.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  standalone:true,
  imports:[FirstNavComponent,SecondNavComponent,BodyComponent,FooterComponent,CommonModule]
})
export class FirstComponent {

}
