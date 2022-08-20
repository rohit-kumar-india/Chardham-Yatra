import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gujrat-package',
  templateUrl: './gujrat-package.component.html',
  styleUrls: ['./gujrat-package.component.css']
})
export class GujratPackageComponent implements OnInit {
  phone='+919631131636';
  public packages:any[]=[
    {"pic":"gujarat1","name":"KUTCH TOUR PACKAGE","duration":"02 Nights / 03 Days","price":"Rs.7,000/- Per Person","cover":"Rann Of Utsav Sightseeing"},
    {"pic":"gujarat2","name":"DWARKA SOMNATH WITH AMBA JI TEMPLE PACKAGE","duration":"04 Nights / 05 Days","price":"Rs.8,000/- Per Person","cover":"Dwarka , Nageshwar , Porbandar , And Somnath Ambai Temple Sightseeing"},
    {"pic":"gujarat3","name":"DWARKA SOMNATH DIU AND SASANGIR TOUR PACKAGE","duration":"05 Nights / 06 Days","price":"Rs.8,500/- Per Person","cover":"	Dwarka, Somnath, Diu, And Sasangir Sightseeeing"},
    {"pic":"gujarat4","name":"DWARKA SOMNATH TOUR PACKAGE","duration":"03 Nights / 04 days","price":"Rs.7,000/- Per Person","cover":"Dwarka , Nageshwar , Porbandar , And Somnath Sightseeing"},
    {"pic":"gujarat5","name":"DWARKA SOMNATH TOUR PACKAGE","duration":"02 Nights / 03 Days","price":"Rs.6,000/- Per Person","cover":"Dwarka, Porbandar And Somnath"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
