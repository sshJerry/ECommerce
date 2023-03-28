import { Component, OnInit } from '@angular/core';
import { CATOGORIES } from 'src/app/core/consants/mock-catogories';
import { DataService } from 'src/app/core/services/data.service';
import { CatogoriesInterface } from './catogories-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catogories',
  templateUrl: './catogories.component.html',
  styleUrls: ['./catogories.component.css']
})
export class CatogoriesComponent implements OnInit {
  catogories = CATOGORIES;
  catogory: CatogoriesInterface = {} as CatogoriesInterface;
  componentCatogory : any;
  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit(): void{
    this.data.currentCatogory.subscribe(
      componentCatogory => this.componentCatogory = componentCatogory);
    this.catogory = this.componentCatogory;
    console.log();
    console.log(this.componentCatogory);
    console.log();
    console.log(this.catogory);
  }

  selectedCatogory?:CatogoriesInterface;
  onSelect(catogory: CatogoriesInterface): void {
    this.selectedCatogory = catogory;
    console.log("Cat Clicked: " + this.selectedCatogory.catogoryId + " Name: "+ this.selectedCatogory.catogoryName)
    this.data.changeCatogory(this.selectedCatogory);
  }
}

