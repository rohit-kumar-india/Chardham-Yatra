import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysore-package',
  templateUrl: './mysore-package.component.html',
  styleUrls: ['./mysore-package.component.css']
})
export class MysorePackageComponent implements OnInit {
  phone='+919631131636';
  public packages:any[]=[
    {"pic":"mysore1","name":"OOTY PACKAGE FROM COIMBATORE","duration":"02 Nights / 03 Days","price":"Rs.5,000/- Per Person","cover":"Ooty Sightseeing"},
    {"pic":"mysore2","name":"MYSORE OOTY AND COORG SIGHTSEEING PACKAGE FROM BANGALORE","duration":"04 Nights / 05 Days","price":"Rs.8,000/- Per Person","cover":"Mysore, Ooty And Coorg Sightseeing"},
    {"pic":"mysore3","name":"MYSORE OOTY COORG AND KODAIKANAL PACKAGE FROM BANGALORE","duration":"05 Nights / 06 Days","price":"Rs.9,000/- Per Person","cover":"Mysore, Coorg, Ooty And Kodaikanal"},
    {"pic":"mysore4","name":"MYSORE OOTY COORG AND KODAIKANAL PACKAGE FROM BANGALORE","duration":"06 Nights / 07 Days","price":"Rs.10,000/- Per Person","cover":"Mysore, Ooty Coorg , Kodaikanal Sightseeing"},
    {"pic":"mysore5","name":"MYSORE AND OOTY PACKAGE FROM BANGALORE","duration":"3 Nights / 4 days","price":"Rs.6,000/- Per Person","cover":"Mysore, Ooty Sightseeing"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
