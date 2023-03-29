import { Component, OnInit } from '@angular/core';
import { CATOGORIES } from 'src/app/core/consants/mock-catogories';
import { DataService } from 'src/app/core/services/data.service';
import { CatogoriesInterface } from './catogories-interface';

@Component({
  selector: 'app-catogories',
  templateUrl: './catogories.component.html',
  styleUrls: ['./catogories.component.css']
})
export class CatogoriesComponent implements OnInit {
  catogories = CATOGORIES;
  catogory: CatogoriesInterface = {} as CatogoriesInterface;
  componentCatogory : any;

  constructor(private data: DataService) {}

  ngOnInit(): void{
    this.data.currentCatogory.subscribe(
      componentCatogory => this.componentCatogory = componentCatogory);
    this.catogory = this.componentCatogory;
  }

  onSelect(catogory: CatogoriesInterface): void {
    this.data.changeCatogory(catogory);
  }
}

