import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chardham-package',
  templateUrl: './chardham-package.component.html',
  styleUrls: ['./chardham-package.component.css']
})
export class ChardhamPackageComponent implements OnInit {
  phone='+919631131636';
  public title:any="Chardham Yatra";
  public packages:any[]=[
    {"pic":"chardham1","name":"CHARDHAM PACKAGE FROM DELHI","duration":"11 Night/ 12 Days","price":"27,500/- Per Person","cover":"Yamunotri ,Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardham2","name":"CHARDHAM PACKAGE FROM HARIDWAR","duration":"09 Nights / 10DAYS","price":"22,500/- Per Person","cover":"Yamunotri Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardham3","name":"CHARDHAM PACKAGE FROM DEHRADUN","duration":"09 Nights / 10DAYS","price":"24,500/- Per Person","cover":"	Yamunotri Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardham4","name":"TEEN DHAM YATRA PACKAGE FROM HARIDWAR","duration":"07 Nights / 08 DAYS","price":"18,500/- Per Person","cover":"Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardham5","name":"TEEN DHAM YATRA PACKAGE FROM DELHI","duration":"07 Nights / 08 DAYS","price":"22,500/- Per Person","cover":"	Gangotri Kedarnath And Badrinath Sightseeing"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
