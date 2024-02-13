import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-three-star',
  templateUrl: './three-star.component.html',
  styleUrls: ['./three-star.component.scss'],
  imports:[CommonModule],
  standalone:true

})
export class ThreeStarComponent {

  constructor(private itemservice:ProdService){}

  threeRatedItems!:item[];

  ngOnInit(){
    this.getthreeRated();
  }

  getthreeRated(){
    this.itemservice.threeRatedProd().subscribe((data:any)=>{
      this.threeRatedItems = data;
      console.log('4 star items : ',this.threeRatedItems);
    })
  }

}
