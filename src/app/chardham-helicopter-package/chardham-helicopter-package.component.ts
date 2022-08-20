import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chardham-helicopter-package',
  templateUrl: './chardham-helicopter-package.component.html',
  styleUrls: ['./chardham-helicopter-package.component.css']
})
export class ChardhamHelicopterPackageComponent implements OnInit {
  phone='+919631131636';
  public packages:any[]=[
    {"pic":"chardhamh1","name":"CHARDHAM HELICOPTER PACKAGE FROM DELHI","duration":"04 Nights / 05 DAYS","price":"1,70,000/- Per Person","cover":"Yamunotri ,Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardhamh2","name":"CHARDHAM HELICOPTER PACKAGE FROM HARIDWAR","duration":"02 Nights / 03DAYS","price":"1,22,500/- Per Person","cover":"Yamunotri Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardhamh3","name":"CHARDHAM HELICOPTER PACKAGE FROM DEHRADUN","duration":"02 Nights / 03DAYS","price":"1,24,500/- Per Person","cover":"	Yamunotri Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardhamh4","name":"TEEN DHAM HELICOPTER PACKAGE FROM HARIDWAR","duration":"01 Nights / 02 DAYS","price":"80,000/- Per Person","cover":"Gangotri Kedarnath And Badrinath Sightseeing"},
    {"pic":"chardhamh5","name":"TEEN DHAM HELICOPTER PACKAGE FROM DELHI","duration":"01 Nights / 02 DAYS","price":"72,500/- Per Person","cover":"	Gangotri Kedarnath And Badrinath Sightseeing"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
