import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-viewbike',
  templateUrl: './viewbike.component.html',
  imports:[CommonModule,HttpClientModule],
  standalone:true,
  styleUrls: ['./viewbike.component.scss']
})
export class ViewbikeComponent {
  constructor(private itemservice:ProdService){}

  ngOnInit(){
    this.getbikes();
  }

  bikeitems!: item[];

  getbikes(){
    this.itemservice.getbikeProd().subscribe((data: any) => {
      this.bikeitems = data;
      console.log('View Bike Products', this.bikeitems);
    });
  }
}
