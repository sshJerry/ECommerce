import { Component, OnInit } from '@angular/core';
import { CATOGORIES } from 'src/app/core/consants/mock-catogories';
import { CatogoriesInterface } from './catogories-interface';

@Component({
  selector: 'app-catogories',
  templateUrl: './catogories.component.html',
  styleUrls: ['./catogories.component.css']
})
export class CatogoriesComponent implements OnInit {
  /** 
   * import { CatogoriesInterface } from './catogories-interface';
   * catogory: CatogoriesInterface = {
    catogoryId : 1,
    catogoryName : 'Wells Fargo InClass Mock Data'
    };*/
  catogories = CATOGORIES;
  ngOnInit(): void{
    console.log(this.catogories);
  }
  selectedCatogory?:CatogoriesInterface;
  onSelect(catogory: CatogoriesInterface): void {
    this.selectedCatogory = catogory;
    console.log("Cat Clicked: " + this.selectedCatogory.catogoryId + " Name: "+ this.selectedCatogory.catogoryName)
  }
}

