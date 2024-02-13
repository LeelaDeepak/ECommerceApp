import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-two-star',
  templateUrl: './two-star.component.html',
  styleUrls: ['./two-star.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class TwoStarComponent {

  constructor(private itemservice:ProdService){}

  twoRatedItems!:item[];

  ngOnInit(){
    this.gettwoRated();
  }

  gettwoRated(){
    this.itemservice.twoRatedProd().subscribe((data:any)=>{
      this.twoRatedItems = data;
      console.log('2 star items : ',this.twoRatedItems);
    })
  }
}
