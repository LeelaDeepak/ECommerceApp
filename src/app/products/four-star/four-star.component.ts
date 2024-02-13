import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-four-star',
  templateUrl: './four-star.component.html',
  styleUrls: ['./four-star.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class FourStarComponent {
  constructor(private itemservice:ProdService){}

  fourRatedItems!:item[];

  ngOnInit(){
    this.getfourRated();
  }

  getfourRated(){
    this.itemservice.fourRatedProd().subscribe((data:any)=>{
      this.fourRatedItems = data;
      console.log('4 star items : ',this.fourRatedItems);
    })
  }



}
