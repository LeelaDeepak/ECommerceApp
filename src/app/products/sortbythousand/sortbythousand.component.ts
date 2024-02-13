import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-sortbythousand',
  templateUrl: './sortbythousand.component.html',
  styleUrls: ['./sortbythousand.component.scss'],
  standalone:true,
  imports:[CommonModule,HttpClientModule]
})
export class SortbythousandComponent {
  firstsort!:item[];
  constructor(private itemservice:ProdService){}

  ngOnInit(){
    this.getFirstSort();
  }

  getFirstSort(){
    this.itemservice.getwithlitmit(1000,2000).subscribe((data:any)=>{
      this.firstsort = data;
      console.log('this is the data in sortby thoudands component',this.firstsort);
    });
  }

}
