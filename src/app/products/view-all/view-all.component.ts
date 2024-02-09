import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FirstNavComponent } from 'src/app/NavBar/first-nav/first-nav.component';
import { SecondNavComponent } from 'src/app/NavBar/second-nav/second-nav.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';
import { ViewbikeComponent } from '../viewbike/viewbike.component';
import { ViewcarComponent } from '../viewcar/viewcar.component';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
  standalone: true,
  imports: [
    FirstNavComponent,
    SecondNavComponent,
    FooterComponent,
    CommonModule,
    HttpClientModule,
    ViewbikeComponent,
    ViewcarComponent,
  ],
})
export class ViewAllComponent {
  showvalue = false;
  constructor(private itemservice: ProdService) {}
  shopitems!: item[];
  caritems!: item[];
  bikeitems!: item[];
  showbike = false;
  showcar = false;

  ngOnInit() {
    this.checkview();
  }

  checkview() {
    if (this.showbike == true) {
      this.getbike();
      console.log('Bike category');
    } else if (this.showcar == true) {
      this.getcar();
      console.log('Car category');
    } else {
      this.viewproducts();
      console.log('No category selected');
    }
  }

  changeval() {
    this.showvalue = !this.showvalue;
  }

  viewproducts() {
    this.itemservice.getAllprod().subscribe((data: any) => {
      this.shopitems = data;
      console.log('View all products', this.shopitems);
    });
    this.showbike = this.showcar = false;
  }

  getcar() {
    this.showcar = true;
    this.showbike = false;
  }

  getbike() {
    this.showbike = true;
    this.showcar = false;
  }
}
