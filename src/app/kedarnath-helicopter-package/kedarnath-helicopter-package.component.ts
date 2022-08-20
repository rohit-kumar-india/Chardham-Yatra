import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kedarnath-helicopter-package',
  templateUrl: './kedarnath-helicopter-package.component.html',
  styleUrls: ['./kedarnath-helicopter-package.component.css']
})
export class KedarnathHelicopterPackageComponent implements OnInit {
  phone='+919631131636';
  public packages:any[]=[
    {"pic":"kedarnath1","name":"KEDARNATH HELICOPTER BOOKING FROM GUPTKASHI","duration":"01 Nights / 01 Days","price":"Rs.11,000/- Per Person","cover":"Kedarnath Temple Darshan Same Day"},
    {"pic":"kedarnath2","name":"KEDARNATH HELICOPTER BOOKING FROM PHATA","duration":"01 Nights / 01 Days","price":"Rs.8,000/- Per Person","cover":"Kedarnath Temple Darshan Same Day"},
    {"pic":"kedarnath3","name":"KEDARNATH HELICOPTER BOOKING FROM SITAPUR","duration":"01 Nights / 01 Days","price":"Rs.8,000/- Per Person","cover":"Kedarnath Temple Darshan Same Day"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
