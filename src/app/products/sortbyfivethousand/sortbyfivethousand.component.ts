import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-sortbyfivethousand',
  templateUrl: './sortbyfivethousand.component.html',
  styleUrls: ['./sortbyfivethousand.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class SortbyfivethousandComponent {
  fourthsort!:item[];
  constructor(private itemservice:ProdService){}

  ngOnInit(){
    this.getFourthSort();
  }

  getFourthSort(){
    this.itemservice.getAbove(5000).subscribe((data:any)=>{
      this.fourthsort = data;
      console.log('this is the data in sortby thoudands component',this.fourthsort);
    });
  }

}
