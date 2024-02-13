import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-sortbytwothousand',
  templateUrl: './sortbytwothousand.component.html',
  styleUrls: ['./sortbytwothousand.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class SortbytwothousandComponent {
  secondsort!:item[];
  constructor(private itemservice:ProdService){}

  ngOnInit(){
    this.getSecondSort();
  }

  getSecondSort(){
    this.itemservice.getwithlitmit(2000,3000).subscribe((data:any)=>{
      this.secondsort = data;
      console.log('this is the data in sortby thoudands component',this.secondsort);
    });
  }

}
