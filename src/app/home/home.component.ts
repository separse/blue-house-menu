import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IMenu } from 'src/models/menu';
import { DataService } from 'src/service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuData!: IMenu[];
  informations = [
    {
      value: 'خیابان شهیدرجایی، روبه‌روی کوچه بحرینی، بین البرز 1 و 2',
      icon: faLocationDot,
    },
    {
      value: '09360438808',
      icon: faPhone,
    },
    {
      value: 'bluehouse_malayer',
      icon: faPhone,
    },
  ];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.menuData = this.dataService.menu;
  }
  
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView();
  }

}
