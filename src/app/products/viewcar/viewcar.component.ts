import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { item } from 'src/app/modal';
import { ProdService } from 'src/app/prod.service';

@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  standalone:true,
  imports:[CommonModule,HttpClientModule],
  styleUrls: ['./viewcar.component.scss']
})
export class ViewcarComponent {

  caritems!: item[];

  constructor(private itemservice:ProdService){}

  ngOnInit(){
    this.getcars();
  }

  getcars(){
    this.itemservice.getCarProd().subscribe((data: any) => {
      this.caritems = data;
      console.log('View Car Products', this.caritems);
    });
  }

}
