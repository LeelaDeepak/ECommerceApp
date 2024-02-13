import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FirstNavComponent } from 'src/app/NavBar/first-nav/first-nav.component';
import { SecondNavComponent } from 'src/app/NavBar/second-nav/second-nav.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';
import { ViewbikeComponent } from '../viewbike/viewbike.component';
import { ViewcarComponent } from '../viewcar/viewcar.component';
import { FormsModule } from '@angular/forms';
import { FourStarComponent } from '../four-star/four-star.component';
import { ThreeStarComponent } from '../three-star/three-star.component';
import { TwoStarComponent } from '../two-star/two-star.component';
import { SortbyfivethousandComponent } from '../sortbyfivethousand/sortbyfivethousand.component';
import { SortbythousandComponent } from '../sortbythousand/sortbythousand.component';
import { SortbytwothousandComponent } from '../sortbytwothousand/sortbytwothousand.component';

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
    FormsModule,
    FourStarComponent,
    ThreeStarComponent,
    TwoStarComponent,
    SortbyfivethousandComponent,
    SortbythousandComponent,
    SortbytwothousandComponent
  ],
})
export class ViewAllComponent {
  showvalue = false;
  searchmode=false;
  searchvalue=false;
  searchdata!:item[];
  constructor(private itemservice: ProdService) {}
  searchitem!: string;
  shopitems!: item[];
  caritems!: item[];
  bikeitems!: item[];
  showbike = false;
  showcar = false;
  showfourRate=false;
  showthreeRate=false;
  showtwoRate=false;
  showfromthousand=false;
  showfromtwothousand=false;
  showfromfivethousand=false;
  showonly=false;

  searchQuery(){
    this.searchmode = true;
    console.log("Search This Item",this.searchitem.replace(' ','%20').charAt(0).toUpperCase()+this.searchitem.slice(1));
    this.itemservice.searchAllProd(this.searchitem.replace(' ','%20').charAt(0).toUpperCase()+this.searchitem.slice(1)).subscribe((data:any)=>{
      if(data.length>0){
        this.searchvalue = true;
        this.searchdata=data;
        console.log(this.searchdata);
      }else{
        this.searchvalue = false;
        console.log("Not Found in DataBase");
      }
    });
  }


  checkFourRating(){
    this.showfourRate=true;
    console.log("Four Rated Activated");
    this.showthreeRate=false;
    this.showtwoRate=false;
  }

  checkThreeRating(){
    this.showthreeRate = true;
    console.log("Three Rated Activated");
    this.showfourRate=false;
    this.showtwoRate=false;
  }

  checkTwoRating(){
    this.showtwoRate = true;
    console.log("Two Rated Activated");
    this.showthreeRate=false;
    this.showfourRate=false;
  }

  checkthousand(){
    this.showfromthousand=true;
    console.log("Thousand Price Items Showing");
    this.showfromtwothousand = false;
    this.showfromfivethousand=false;
  }

  checktwothousand(){
    this.showfromtwothousand = true;
    console.log("Two Thousand Price Items Showing");
    this.showfromfivethousand=false;
    this.showfromthousand=false;
  }


  checkfivethousand(){
    this.showfromfivethousand = true;
    console.log("Five Thousand Price Items Showing");
    this.showfromthousand=false;
    this.showfromtwothousand=false;
  }

  ngOnInit() {
    this.checkview();
  }

  showfilter(){
    console.log(this.showonly);
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
